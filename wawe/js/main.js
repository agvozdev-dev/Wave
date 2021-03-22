$(function () {
  mixitup('.gallery__images');

  $('[data-fancybox="images"]').fancybox({
    buttons: [
      "close"
    ],
  });

  $('.blog__slider').slick({
    dots: true,
    arrows: false,
  });
})