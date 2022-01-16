const currentLocation = location.href;
const menuItem = document.querySelectorAll('.menu__link');
const menuLenght = menuItem.length
for (let i = 0; i<menuLenght; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active menu__link";
  }
}