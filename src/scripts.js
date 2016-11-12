  var $navToggle = $('.header_mobile_toggle-img');
  var $navClose = $('.header_mobile_toggle-img_close')
  var $dropmenu = $('.toggle');
  var $window = $(window);
  var mobileBreakpoint = 1024;

$(document).ready(function() {
  $navToggle.on('click', function(e) {
    e.preventDefault();
    $dropmenu.slideToggle();
    $navToggle.toggleClass('active');
  });

  $navClose.on('click', function() {
    $dropmenu.slideToggle();
  });
});
