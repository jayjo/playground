jQuery(document).ready(function($) {

	$('.circle').on('click', function() {
		$(this).addClass('active');
		$('.fade').addClass('active');
	});

});
