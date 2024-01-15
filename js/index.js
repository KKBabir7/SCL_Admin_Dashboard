//add toggle menu classes
$(document).ready(function () {
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
});
//sidebar menu items animated
$(document).ready(function () {
$("[id^='sidebar-swipe']").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled-2");
  $("#sidebar-wrapper").toggleClass("sidebar-toggled");
   $("[id^='sidebar-swipe']").toggleClass("swipe-icon-animate");
  $("[id^='main-menu-list']").toggleClass("main-menu-list main-menu-list-hidden");
  $("#header-menu").toggleClass("header-menu-swipe");
  if ($('#sidebar-wrapper').hasClass('sidebar-toggled')) {
    $('.nav-side-menu .nav-parent').not($(this)).find('.sub-menu.in').collapse('hide');
  }
});
});
//responsive sidebar sub-menu show hide
$(document).ready(function(){
  if ($(window).width() < 767){
    $('.nav-side-menu .nav-parent').click(function(){
      if ($('#sidebar-wrapper').hasClass('sidebar-toggled')) {
        $('.nav-side-menu .nav-parent').not($(this)).find('.sub-menu.in').collapse('show'); 
        }
      else {
        $('.nav-side-menu .nav-parent').not($(this)).find('.sub-menu.in').collapse('hide');
        }
      });
  }
  else{
      $('.nav-side-menu .nav-parent').click(function(){
         if ($('#sidebar-wrapper').hasClass('sidebar-toggled')) {
        $('.nav-side-menu .nav-parent').not($(this)).find('.sub-menu.in').collapse('hide');
        }
      else {
        $('.nav-side-menu .nav-parent').not($(this)).find('.sub-menu.in').collapse('show');
        }
      });
  }
});
//main active menu 
$(document).ready(function() {
  $('.nav-side-menu .nav-parent .side-menu-items').click(function() {
    $('.nav-side-menu .nav-parent .side-menu-items').removeClass('active-link');
    $(this).addClass('active-link');
  });
});
//sub-menu active
$(document).ready(function() {
  $('.sub-menu li ').click(function(e){
    $('.nav-side-menu .nav-parent .sub-menu li a').click(function() {
      $('.nav-side-menu .nav-parent .sub-menu li a').removeClass('active-link-as');
      $(this).addClass('active-link-as');
    });
    e.stopPropagation();
  });
  });
// carousel swiping 
$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});

// function initMenu() {
//   $('#menu ul').hide();
//   $('#menu ul').children('.current').parent().show();
//   $('#menu ul:first').show();
//   $('#menu li a').click(
//      function() {
//         var checkElement = $(this).next();
//         if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//            return false;
//         }
//         if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
//            $('#menu ul:visible').slideUp('normal');
//            checkElement.slideDown('normal');
//            return false;
//         }
//      }
//   );
// }
// $(document).ready(function() {
//   initMenu();
// });



