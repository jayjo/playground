jQuery(document).ready(function($) {

	$('.more').click(function(event){
		event.stopPropagation();
		$('.tip').addClass('open');
	});

	$('body').click(function(){
		$('.tip').addClass('hide');
	});

	$('.more').on('click', function(event){
		event.stopPropagation();
		$(this).next('.tip').toggleClass('hide');
		$(this).parent().siblings().find('.tip').addClass('hide');
		return false;
	});

	$(document).on('click', function(){
		$('.tip').addClass('hide');
		return false;
	});

	$('.select').on('click', function(e){
		$(this).parent().siblings().prev('.name').find('.icon').toggleClass('check');
		$(this).toggleClass('selected');
		$(this).parent().addClass('hide');
		if($('.icon.type').hasClass('check')) {
			$('header.two').addClass('active');
			$(this).addClass('selected');
		} else {
			$('header.two').removeClass('active');
			$(this).removeClass('selected');
		}
		return false;
	});

	$('.icon.type').on('click', function(){
		$(this).toggleClass('check');
		if($(this).hasClass('check')) {
			$('header.two').addClass('active');
			$(this).parent().parent().find('.select').addClass('selected');
		} else {
			$('header.two').removeClass('active');
			$(this).parent().parent().find('.select').removeClass('selected');
		}
		return false;
	});

	$('.cancel').on('click', function(){
		$('header.two').removeClass('active');
		$('.icon.type').removeClass('check');
		$('.select').removeClass('selected');
		$('.folderList').removeClass('open').removeClass('sticky');
		return false;
	});

	$('.delete').on('click', function(){
		$(this).parent().parent('li').fadeOut('fast');
		return false;
	});

	$('.deleteAll').on('click', function(){
		$('.check').parent().parent('li').fadeOut('fast');
		$('header.two').removeClass('active');
	});

	$(window).scroll(function(){
		var head = $('header'),
				tabHead = $('.tabHead'),
				con = $('.content'),
				menu = $('.folderList'),
				scroll = $(window).scrollTop();

		if (scroll >= 80) {
			head.addClass('sticky');
			tabHead.addClass('sticky');
			con.addClass('sticky');
			menu.addClass('sticky');
		} else {
			head.removeClass('sticky');
			tabHead.removeClass('sticky');
			con.removeClass('sticky');
			menu.removeClass('sticky');
		}

	})

	$('.toggle').on('click', function(){
		$(this).toggleClass('off');
	});

	$('.move-to').click(function(event){
		event.stopPropagation();
		$('.folderList').toggleClass('open');
		event.preventDefault();
	});

	$('body').click(function(){
		$('.folderList').removeClass('open');
	});

});

