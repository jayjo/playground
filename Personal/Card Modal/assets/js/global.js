jQuery(document).ready(function($) {

	$('.project').on('click', function(){
		$(this).toggleClass('active');
		$('.project_menu').toggleClass('active');
	});

});
