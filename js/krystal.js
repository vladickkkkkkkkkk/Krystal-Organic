$(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      accessability:true,
      adaptiveHeight:false,
      autoplay:true,
      autoplaySpeed:2000,
      arrows:true,
      dots:true,
      pauseOnHover:true,
      pauseOnDotsHover:true,
      variableWidth: true,
      mobileFirst: true,
    });
  });
  $(document).ready(function() {
 
    var $navbar = $(".navbar"), offsetTop = $navbar.offset().top;
 
    switchFixed();
 
    $(window).scroll(function() {
        switchFixed();
    });
 
    function switchFixed() {
        $(window).scrollTop() >= offsetTop ? $navbar.addClass("fixed") : $navbar.removeClass("fixed");
    }
 
});
$(document).on("click", ".navbar", function(e) {
  e.preventDefault();
  var id  = $(this).attr('href');
  var top = $(id).offset().top; // получаем координаты блока
  $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});
$(document).on("click", ".dot", function(e) {
  e.preventDefault();
  $('body, html').animate({scrollTop: 0}, 800);
});