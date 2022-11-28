$(document).ready(function(){
  $('.comments__slider').slick({
    draggable: true,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
  });
});