"use strict";

var containers;

window.addEventListener("load", initDrawers);

function initDrawers() {
  // Get the containing elements
  containers = document.querySelectorAll(".entry__container");
  setHeights();
  wireUpTriggers();
  window.addEventListener("resize", setHeights);
}

function setHeights() {
  containers.forEach((container) => {
    // Get content
    let content = container.querySelector(".entry__content");
    // Needed if this is being fired after a resize
    content.removeAttribute("aria-hidden");
    // Height of content to show/hide
    let heightOfContent = content.getBoundingClientRect().height;
    // Set a CSS custom property with the height of content
    container.style.setProperty("--containerHeight", `${heightOfContent}px`);
    // Once height is read and set

    setTimeout((e) => {
      container.classList.add("height-is-set");
      content.setAttribute("aria-hidden", "true");
    }, 0);
  });
}

function wireUpTriggers() {
  containers.forEach((container) => {
    // Get each trigger element
    let btn = container.querySelector(".entry__btn");
    // Get content
    let content = container.querySelector(".entry__content");
    btn.addEventListener("click", () => {
      container.setAttribute(
        "data-drawer-showing",
        container.getAttribute("data-drawer-showing") === "true"
          ? "false"
          : "true"
      );
      content.setAttribute(
          "aria-hidden",
          content.getAttribute("aria-hidden") === "true" ? "false" : "true"
      );
    });
  });
}

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.menu__link');
const menuLenght = menuItem.length
for (let i = 0; i<menuLenght; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active menu__link";
  }
}