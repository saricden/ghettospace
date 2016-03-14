$('.nav-pills a').click(function (e) {
	if ($(this).attr('href')) {
		e.preventDefault();
		$(this).tab('show');
	}
});

$('.navbar-toggle').click(function (e) {
  $('.navbar').toggleClass('open');
  $('.nav-toggle').toggleClass('off');
  $('.play-game').toggleClass('on');
});

var navScroll = function() {
  // var startOffset = $('.header-banner').outerHeight();
  var startOffset = 0;
  var scroll = $(this).scrollTop();
  if (scroll > startOffset) {
    var navFade = (scroll - startOffset)/100;
    $('nav.navbar').css({'backgroundColor':'rgba(0,0,0,'+navFade+')'});
  }
  else {
    $('nav.navbar').css({'backgroundColor':'transparent'});
  }
};

$(window).scroll(navScroll);
$(document).ready(navScroll);