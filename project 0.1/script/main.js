window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var cat = document.getElementById("text");

var sticky = text.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed--top");
  } else {
    navbar.classList.remove("fixed--top");
  }
}
