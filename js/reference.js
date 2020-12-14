$(window)
  .scroll(function () {
    // selectors
    var $window = $(window),
      $body = $('body'),
      $panel = $('.section')
    // console.log(`$winow: ${$window.scrollTop()}`)
    // console.log($panel);
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3
    var totalPanelHeight = 0
    // console.log('scroll-->', scroll)
    $panel.each(function () {
      var $this = $(this)
      totalPanelHeight += $this.height()
      //   console.log($this.position().top)
      // console.log(totalPanelHeight)
      // console.log($this.position().top);
      // console.log("height",$this.height());
      // console.log($this);
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          // console.log(index,css);
          // return 'color-red color-blue color-yellow'
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ')
        })

        // $('.section').removeClass('active')
        // $this.addClass('active')
      }
      if (scroll > $('#last').position().top + $('#last').height() / 2) {
        $('.background').css(
          'top',
          `-${scroll - (totalPanelHeight - $this.height())}px`
        )
        $this
          .find('.section__img__inner')
          .css({ top: `-${scroll - (totalPanelHeight - $this.height())}px` })
      } else {
        $('.background').css('top', `${0}vh`)
        $this.find('.section__img__inner').css({ top: `${0}vh` })
      }
    })
  })
  .scroll()
