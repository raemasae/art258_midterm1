  var $navToggle = $('.header_mobile_toggle-img');
  var $dropmenu = $('.toggle');
  var $window = $(window);
  var mobileBreakpoint = 1024;

$(document).ready(function() {
  $navToggle.on('click', function(e) {
    e.preventDefault();
    $dropmenu.slideToggle();
    $navToggle.toggleClass('active');
  });

  $dropmenu.on('click', function() {
    $dropmenu.slideToggle();
  });
});
