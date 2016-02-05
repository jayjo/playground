jQuery(document).ready(function($) {

	var $document = $(document),
			$window = $(window);

	$document.on('focus blur', '.eventChooser', function(){
		if($(this).text() != "Filter"){
			$(this).addClass('active');
		}
	});

});