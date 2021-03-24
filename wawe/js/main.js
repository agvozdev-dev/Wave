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
  })

	$('.menu a').on('click', function (event) {
		event.preventDefault();
    
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		
		$('body,html').animate({ scrollTop: top }, 1500);
	});


  mixitup('.gallery__images');
})