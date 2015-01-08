jQuery(document).ready(function($) {

	$('.delete').on('click', function(e){
		$(this).addClass('active');
		$('.sure').addClass('active');
		$('.cancel').addClass('active');
		e.preventDefault();
	});

	$('.cancel').on('click', function(e){
		$(this).removeClass('active');
		$('.sure').removeClass('active');
		$('.delete').removeClass('active');
		e.preventDefault();
	});

});
