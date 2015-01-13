jQuery(document).ready(function($) {

	$('.custom').on('focus', function(){
		$('.set').addClass('active');
		$('.or').addClass('active');
		$('.x').addClass('active');
	});

	$('.custom').on('blur', function(){
		$('.set').removeClass('active');
		$('.or').removeClass('active');
		$('.x').removeClass('active');

		if ($('.custom').val().length != 0) {
			$('.custom').addClass('blue');
		  $('.set').addClass('white');
		}

	});

	$('.x').on('click', function(){
		$(	'.custom').val('');
		$('.x').removeClass('active');
		$('.set').removeClass('white');
		$('.custom').removeClass('blue');
	});

	$('.set').on('click', function(){
		$('.custom').val('');
		$('.set').removeClass('white');
		$('.custom').removeClass('blue');
	});

});
