$(function () {
  mixitup('.gallery__images');

  $('[data-fancybox="images"]').fancybox({
    buttons: [
      "close"
    ],
  });
})