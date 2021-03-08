$(function () {
  mixitup('.gallery__images', {
    animation: {
      enable: false
    }
  });

  $('[data-fancybox="images"]').fancybox({
    buttons: [
      "close"
    ],
  });
})