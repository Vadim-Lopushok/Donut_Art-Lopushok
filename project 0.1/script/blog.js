//MENU

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.menu__link');
const menuLenght = menuItem.length
for (let i = 0; i < menuLenght; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active menu__link";
  }
}

// POPUP

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('elem-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.popup');

for (let elm of elements) {
  observer.observe(elm);
}