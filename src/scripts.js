$(document).ready(function () {
  var $navToggle = $('.header_mobile_toggle-img');
  var $dropmenu = $('.toggle_nav');
  var $window = $(window);
  var mobileBreakpoint = 1024;

  $navToggle.on('click', function() {
    $dropmenu.slideToggle();
    $navToggle.toggleClass('active');
  });

  $dropmenu.on('click', function() {
    $dropmenu.slideToggle();
  });
});
