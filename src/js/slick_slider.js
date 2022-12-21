$(document).ready(function () {
  $('.blog__slider-list').slick(
    {
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '60px',       
      adaptiveHeight: true,
      variableWidth: true,
      speed: 900,
      easing: 'ease',
      autoplay: true,
      autoplaySpeed: 1000,      
      initialSlide: 1,
      // prevArrow:'<button class="slick-prev">left<svg class="icon"><use href="./images/icons.svg#arrow-left"></use></svg></button>',
      // nextArrow:'<button class="slick-next">right<svg class="icon"><use href="./images/icons.svg#arrow-right"></use></svg></button>',
      // dots: true,     
      
    }
  );
})