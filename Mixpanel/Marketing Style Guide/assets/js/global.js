jQuery(document).ready(function($) {

	///// FORM STUFF

	$('input[type=text]').click(function(){
		this.select();
	});

	$('label').on('click', function(){
		$(this).next('input').select();
	});

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

		if (y >= '5'){
			$('.hero').addClass('slide');
			$('header').removeClass('hide');
		} else {
		}
	});

///// SCROLLING BUSINESS

$(function(){
	$.scrollIt({
		upKey: 38,
		downKey: 40,
		easing: 'linear',
		scrollTime: 500,
		activeClass: 'active'
	});
});

$(window).scroll(function(event){
	if ($('.color').hasClass('active')) {
		$('.left_area')
			.addClass('colors')
			.removeClass('typography');
		$('.content h1').html('<span>02</span>Color');
		$('.content p.white').html('The Mixpanel color palette has expanded to include dynamic colors that complement each other and can be used in any combination as long as the integrity of the brand remains intact.')
		$('.page').html('02');
	} else if ($('.typography').hasClass('active')) {
		$('.left_area')
			.addClass('typography')
			.removeClass('colors');
		$('.content h1').html('<span>03</span>Typography');
		$('.content p.white').html('Consistent use of our typefaces reinforces the Mixpanel brand identity. We use a combination of <strong>Brandon Grotesque</strong>, <strong>Source Sans Pro</strong> and <strong>Ropa Sans</strong>.')
		$('.page').html('03');
	} else {}
});

// $('a.color').on('click', function(){
// 	$(this).addClass('active').siblings().removeClass('active');
// 	$('.left_area').removeClass('typography').addClass('colors');
// });

// $('a.typography').on('click', function(){
// 	$(this).addClass('active').siblings().removeClass('active');
// 	$('.left_area').removeClass('colors').addClass('typography');
// });

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