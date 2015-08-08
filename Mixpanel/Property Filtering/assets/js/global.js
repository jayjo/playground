jQuery(document).ready(function($) {

	$('.dropdown.invert').click(function(event){
		event.stopPropagation();
		$('.menu').toggleClass('open');
	});

	$(document).click(function(){
		$('.menu').removeClass('open');
	});

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

});

