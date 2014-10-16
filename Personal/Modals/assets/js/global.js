jQuery(document).ready(function($) {

	$('.open').on('click', function() {
		$('.modal-cover').addClass('active');
		$('.modal').addClass('active');
	});

	$('.open').on('click', function(){
		$('.modal-cover.blur').addClass('active');
		$('.modal.default').addClass('active');
	});

	// if ($('body').hasClass('cozy')) {
	// 	$('body').on('click', function(){
	// 		alert("Start a support request.");
	// 	});
	// }

});
