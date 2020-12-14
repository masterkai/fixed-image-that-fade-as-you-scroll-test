function getHeight(el) {
  return Math.ceil(
    parseFloat(getComputedStyle(el, null).height.replace('px', ''))
  )
}

window.addEventListener('scroll', () => {
  // console.log(`window: ${window.scrollY}`)
  const windowScrollTop = window.scrollY
  const windowHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  )
  const scrollValue = windowScrollTop + windowHeight / 3
  // console.log(`scrollValue-->: ${scrollValue}`)
  const panel = document.querySelectorAll('.section')

  const last = document.querySelector('#last')
  const first = document.querySelector('#first')
  const p = document.querySelector('p')
  const pheight = getHeight(p)
  console.log(pheight)
  const offset = 1.52
  let totalPanelHeight = 0
  panel.forEach((el) => {
    totalPanelHeight += getHeight(el)
  })
})
