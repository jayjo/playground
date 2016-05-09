jQuery(document).ready(function($) {

	$('.amount p').on('click', function(){
		$(this).siblings('.answer').addClass('active');
	});

	$('.answer span').on('click', function(){
		$(this).parent().removeClass('active');
		$(this).parent().siblings('p').hide();
	});

});
