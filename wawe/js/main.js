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

  $('.menu__btn, .menu__link').on('click', function () {
    $('.header__top').toggleClass('header__top--active');
  })

  $('.menu a, .header__icon').on('click', function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(window).scroll(function (event) {
    if ($(window).scrollTop() > 50) {
      $(".header__top").addClass("header__top--bg-gray");
    } else {
      $(".header__top").removeClass("header__top--bg-gray");
    }
  });

  mixitup('.gallery__images');
})