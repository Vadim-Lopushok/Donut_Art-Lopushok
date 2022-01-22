const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {

  const triggerBottom = window.innerHeight / 5 * 3
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.menu__link');
const menuLenght = menuItem.length
for (let i = 0; i < menuLenght; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active menu__link";
  }
}