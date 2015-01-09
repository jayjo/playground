jQuery(document).ready(function($) {

	$('.byebye').on('click', function(e){
		$(this).addClass('active');
		$('.hidden').addClass('active');
		$('.hidden').children().addClass('active');
		e.preventDefault();
	});

	$('.yes').on('click', function(e){
		$('#pagewrap').fadeOut();
	});

	$('.no').on('click', function(e){
		$('.byebye').removeClass('active');
		$('.hidden').removeClass('active');
		$('.hidden').children().removeClass('active');
		e.preventDefault();
	});

});
