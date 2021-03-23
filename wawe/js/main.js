$(function () {
  $('[data-fancybox="images"]').fancybox({
    buttons: [
      "close"
    ],
  });

  $('.blog__slider').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn').on('click', function () {
    $('.header__top').toggleClass('header__top--active');

    $('.menu__btn').toggleClass('menu__btn--active');
  })

  mixitup('.gallery__images');
})