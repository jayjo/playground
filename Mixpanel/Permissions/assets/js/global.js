jQuery(document).ready(function($) {

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

	$('body').on('click', '.role_drop', function(e){
		$(this).toggleClass('active');
		$('.role').toggleClass('hidden');
		e.stopPropagation();
	});

	$('.role, .role li').on('click', function(){
		$('.role').addClass('hidden');
		$('.role_drop').removeClass('active');
	});

	$('.search').on('focus', function(){
		$(this).removeClass('closed');
	});

	$('.search').on('blur', function(){
		$(this).addClass('closed');
	});

	$('span.search_container').on('click', function(){
		$('.search').focus();
	});

	$(document).on('click', function(){
		$('.role_drop').removeClass('active');
		$('.role').addClass('hidden');
	});

	$('.current').on('click', function(){
		var current = $(this);
		current.siblings('.role_list').addClass('active');
		current.html('');
		$('.role_list a').on('click', function(){
			var curVal = $(this).html();
			$('.role_list').removeClass('active');
			current.html(curVal+'...');
		});
		$.removeData(current);
		$.removeData(curVal);
	});
});

