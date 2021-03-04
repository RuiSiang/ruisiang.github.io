const loader = document.querySelector('.loader')
window.onload = function () {
  setTimeout(function () {
    loader.style.opacity = '0'
    setTimeout(function () {
      loader.style.display = 'none'
    }, 500)
    popIcons()
  }, 1500)
}

function popIcons() {
  const items = document.querySelectorAll('.fab')
  var count = 0
  while (count < items.length) {
    popIcon(items[count], count)
    count++
  }
}

function popIcon(element, index) {
  setTimeout(function () {
    //element.style.opacity = 1
    id = setInterval(frame, 20)
    iter = 0
    function frame() {
      if (iter === 10) {
        clearInterval(id)
      } else {
        iter += 1
        element.style.opacity = iter / 10
      }
    }
  }, index * 300 + 1200)
}
