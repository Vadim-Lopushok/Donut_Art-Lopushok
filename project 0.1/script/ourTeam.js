"use strict";

$(window).scroll(function () {
  $("#portrait").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 300) {
      $(this).addClass("slideUp");
    }
  });
});

$(window).scroll(function () {
  $("#portrait2").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 300) {
      $(this).addClass("slideLeft");
    }
  });
});

$(window).scroll(function () {
  $("#portrait3").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 300) {
      $(this).addClass("bigEntrance");
    }
  });
});

const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 3000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 640}px)`;
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval (run, 2000)
}

rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.menu__link');
const menuLenght = menuItem.length
for (let i = 0; i<menuLenght; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active menu__link";
  }
}