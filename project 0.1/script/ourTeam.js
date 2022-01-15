'use strict'

$(window).scroll(function() {
  $('#portrait').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 300) {
      $(this).addClass("slideUp");
    }
  });
});

$(window).scroll(function() {
  $('#portrait2').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 300) {
      $(this).addClass("slideLeft");
    }
  });
});

$(window).scroll(function() {
  $('#portrait3').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 300) {
      $(this).addClass("bigEntrance");
    }
  });
});