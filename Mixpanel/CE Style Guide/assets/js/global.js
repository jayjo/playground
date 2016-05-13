jQuery(document).ready(function($) {

	hljs.initHighlightingOnLoad();

	function scrollyBiz(){
		$(window).on('scroll', function(e){
			var Y = $(window).scrollTop();
			if( Y >= $(window).height() - 50 ) {
				console.log($(this).scrollTop());
				$('header').addClass('scrolled');
			} else {
				$('header').removeClass('scrolled');
			}
		});
	}
	scrollyBiz();

});
