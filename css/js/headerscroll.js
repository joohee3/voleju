
$(document).ready(function(){ 

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header_wrap').addClass('header_wrap-scrolled');
    } else {
      $('#header_wrap').removeClass('header_wrap-scrolled');
    }
  })

 });
