jQuery(document).ready(function($) {

	var item = $('.content li');
	var itemSelected = $('.content li.selected');

	// Clear inputs on focus/blur
	$('input[type="text"]').each(function(){
		var default_value = this.value;
			$(this).focus(function(){
				if(this.value === default_value) {
					this.value = '';
				}
			});
			$(this).blur(function(){
				if(this.value === '') {
					this.value = default_value;
				}
			});
	});

	item.click(function(e){
		// if ($(this).hasClass('selected')){
		// 	console.log('has class');
		// 	$(this).removeClass('selected');
		// } else {
		// 	console.log('no class')
		// 	$(this).addClass('selected');
		// }
		if ($('body').hasClass('editing')) {
			$(this).toggleClass('selected');
			// Increment the Elements selected when elements are clicked
			var value = $('.selected').length;
			var dataName = $(this).data('name');
			$('.menu h2 .title span, .eventList .havent .target').html(value);
			$('.elementList').append('<li>'+dataName+'</li>');
			e.preventDefault();
			e.stopPropagation();
			if( value > 0) {
				$('header h3').addClass('hidden');
				$('.headerHolder').removeClass('inactive');
				$('.menu').addClass('visible');
			} else {
				$('.headerHolder').addClass('inactive');
				$('header h3').removeClass('hidden');
				$('.menu').removeClass('visible');
			}
		}
		if ( value !== 0 ) {
			$('button.add').removeClass('inactive');
		} else {
			$('button.add').addClass('inactive');
		}
		$('body').on('click', '.selected.activated', function(e){
			$(this).addClass('trans');
		});
	});

	$('.cont').on('click', function(e){
		$(this).toggleClass('active');
		e.stopPropagation();
		e.preventDefault();
	});

	// $('body').on('click', '.add', function(){
	// 	if ( value === 0) {
	// 		alert("Don't forget to name you're event!");
	// 	} else {

	// 	}
	// });

	// Editing/Interactive mode toggle

	$('body').on('click', '.btn.editing', function(){
		$(this).removeClass('editing').addClass('interactive').html('Interactive Mode');
		$('.leftSide .left span').html("0");
		$('body').removeClass('editing').addClass('interactive');
	});

	$('body').on('click', '.btn.interactive', function(){
		$(this).removeClass('interactive').addClass('editing').html('Editing Mode');
		$('.content li .selected').removeClass('trans').addClass('activated');
		$('.leftSide .left span').html("0");
		$('body').removeClass('interactive').addClass('editing');
	});

	// Draggable Menu
	$('.menu').draggable();

	// Take the value of the input and add it to the menu
	$('.eventname').on('change', function(e){
		var eventName = $('.eventname').val();
		$('.add').on('click', function(e){
			$('.elementList').fadeOut('fast');
			$('.eventList').fadeIn();
			$('.menu h2 .title').html('Events');
			$('.menu h2 .arrow').hide();
			$('.eventList .havent .nameEvent').html(eventName);
			$('.eventname').val("Name your event");
			$('.content').addClass('currentEvent');
			$('.leftSide .left span').html("0");
			$('.add').addClass('inactive');
		});
	});
	// Toggle the state of the menu from Events to Elements
	$('body').on('click', '.eventList li', function(){
		$(this).parent().fadeOut();
		$('.elementList').fadeIn();
		$('.menu h2 .arrow').fadeIn().html("Events");
		$('.menu h2 .title').html('Elements');
		$('.content').removeClass('currentEvent');
	});
	$('body').on('click', '.menu h2 .arrow', function(){
		$('.elementList').fadeOut();
		$('.eventList').fadeIn();
		$('.menu h2 .title').html('Events');
		$(this).hide();
	});

});

