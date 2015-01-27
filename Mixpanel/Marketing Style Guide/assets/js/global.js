jQuery(document).ready(function($) {

	///// FORM STUFF

	$('input[type=text]').click(function(){
		this.select();
	});

	$('label').on('click', function(){
		$(this).next('input').select();
	});

	$('.page').html('03');

	///// STICKY MENU

	///// SET THE BAR SEPARATOR HEIGHT

	function barHeight(){
		$('.bar').css('height', '' + Math.round(.57* $(window).height()));
	}

	$(document).ready(function(){
		barHeight();
		$(window).on('resize', barHeight);
	});

	/// SCROLLING FOR INTRO PAGE

	$(window).scroll(function(event){
		var y = $(this).scrollTop();

		if (y >= '1'){
			$('.hero').addClass('slide');
		} else {
			$('.hero').removeClass('slide');
		}
	});

///// SCROLLMAGIC

	// var controller;
	// $(document).ready(function($) {
	// 	// init controller
	// 	controller = new ScrollMagic();
	// });

	// $(document).ready(function(){
	// 	// Build Tween
	// 	var introWipe = TweenMax.to(".hero", 1, {top: "-100%", delay: 0.5});
	// 	// Build Scroll
	// 	var introTrigger = new ScrollScene({triggerElement: ".hero", duration: 1000})
	// 			.setTween(introWipe)
	// 			.addTo(controller);
	// 	// show indicators (requires debug extension)
	// 	scene.addIndicators();

	// });

	///// SCROLL TO FOR LINKS



	// $(function(){

	// 	$('.nav li a').click(function() {
	// 		var value = $(this).attr('href'),
	// 			destination = $(value).offset().top;

	// 		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 250 );

	// 		});

	// 		// 	navs = $('#main-nav li a, #main-nav-two li a');

	// 		var sections = $('.group');

	// 		var topsArray = sections.map(function(){
	// 			return $(this).position().top + 190;
	// 		}).get();

	// 		var len = topsArray.length;
	// 		var currentIndex = 0;

	// 		window.topsArray = topsArray;

	// 		var getCurrent = function( top ) {
	// 			for(var i = 0; i < len; i++) {
	// 				if  (top > topsArray[i] && (!topsArray[i+1] || top < topsArray[i+1])) {
	// 					return i;
	// 				}
	// 		}
	// 	};

	// });

});