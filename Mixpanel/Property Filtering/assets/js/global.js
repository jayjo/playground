jQuery(document).ready(function($) {

	var freq = $('.frequency');
	var props = $('.properties');
	var dub = $('.dubs');
	var sing = $('.sing');
	var eventIcon = '<img src="http://f.cl.ly/items/3G2S0P451L3s190O0T3A/trend-icon.png" alt="" class="icon"/>';
	var peepIcon = '<img src="http://f.cl.ly/items/0e3B3j0o3x0N2y3X0y2O/person.png" alt="" class="icon perp"/>';
	var del = $('.delete');
	var plus = $('.add_row');
	var addRow = $('.row.add');

	$(document).on('click', '.wrap.events', function(e){
		e.stopPropagation();
		$(this).parent().siblings('.menu.events').toggleClass('open').siblings().removeClass('open');
		$(this).siblings('.wrap.people').css('opacity', '.6');
		$(this).css('opacity', '1');
	});

	$(document).on('click', '.wrap.people', function(e){
		e.stopPropagation();
		$(this).parent().siblings('.menu.people').toggleClass('open').siblings().removeClass('open');
		$(this).siblings('.wrap.events').css('opacity', '.6');
		$(this).css('opacity', '1');
	});

	$(document).click(function(){
		$('.menu').removeClass('open');
		$('.wrap.people').css('opacity', '1');
		$('.wrap.events').css('opacity', '1');
	});

	$(document).on('focus blur', 'numberTime', function(){
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

	$(document).on('keyup keydown focus blur', '.bang', function(){
		if ($(this).val() > 1 || $(this).val() == 0) {
			$(this).next('.plur').html('times');
		} else {
			$(this).next('.plur').html('time');
		}
	});

	$(document).on('keyup keydown focus blur', '.days', function(){
		if ($(this).val() > 1 || $(this).val() == 0) {
			$(this).next('.day').html('days');
		} else {
			$(this).next('.day').html('day');
		}
	});

	$(document).on('click', '.menu.events .list a', function(){
		var prop = $(this).children('.value').html();
		$(this).parent().parent().siblings('.dubs').addClass('inactive');
		$(this).parent().parent().siblings('.sing').addClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().parent().siblings('menu').find('a.active').removeClass('active');
		$(this).parent().parent().siblings('.sing').find('.dropdown.fixie').html('<span class="chosen eventtype">'+prop+'</span>'+'<span class="arrow left what"></span>');
		$(this).parent().parent().parent().addClass('eventify').removeClass('peepify');
	});

	// var myClass = $(this).parent().parent().parent().attr('class');
	// console.log(myClass);

	$(document).on('click', '.menu.people .list a', function(e){
		var prop = $(this).children('.value').html();
		$(this).parent().parent().siblings('.dubs').addClass('inactive');
		$(this).parent().parent().siblings('.sing').addClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().parent().siblings('menu').find('a.active').removeClass('active');
		$(this).parent().parent().siblings('.sing').find('.dropdown.fixie').html(peepIcon+'<span class="chosen">'+prop+'</span>'+'<span class="arrow left what"></span>');
		$(this).parent().parent().parent().addClass('peepify').removeClass('eventify');
	});

	$(document).on('click', '.menu.people .list a', function(){
		$(this).parent().parent().parent().siblings('.properties').addClass('show');
		$(this).parent().parent().parent().siblings('.delete').addClass('show');
	});

	$(document).on('click', '.menu.events .list a', function(){
		$(this).parent().parent().parent().siblings('.frequency').addClass('show');
		$(this).parent().parent().parent().siblings('.delete').addClass('show');
	});

	$(document).on('click', '.fixie', function(e){
		e.stopPropagation();
		$(this).parent().parent().siblings('.dubs').removeClass('inactive');
		$(this).parent().parent().removeClass('active');
		$(this).parent().parent().parent().siblings('.frequency').removeClass('show');
		$(this).parent().parent().parent().siblings('.properties').removeClass('show');
		$(this).parent().parent().parent().siblings('.delete').removeClass('show');
		if($('.cont').hasClass('peepify')) {
			$(this).parent().parent().siblings('.menu.people').addClass('open');
			$(this).parent().parent().siblings('.dubs').find('.wrap.people').css('opacity', '1');
			$(this).parent().parent().siblings('.dubs').find('.wrap.people input').focus();
			$(this).parent().parent().siblings('.dubs').find('.wrap.events').css('opacity', '.6');
		} else if ($('.cont').hasClass('eventify')) {
			$(this).parent().parent().siblings('.menu.events').addClass('open');
			$(this).parent().parent().siblings('.dubs').find('.wrap.people').css('opacity', '.6');
			$(this).parent().parent().siblings('.dubs').find('.wrap.events').css('opacity', '1');
			$(this).parent().parent().siblings('.dubs').find('.wrap.events input').focus();
		}
	});

	$(document).on('click', '.delete', function(e){
		$(this).siblings().find('.dubs').removeClass('inactive');
		$(this).siblings().find('.sing').removeClass('active');
		$(this).siblings('.frequency').removeClass('show');
		$(this).siblings('.properties').removeClass('show');
		$(this).removeClass('show');
		$(this).parent('.row.add').remove();
		e.stopPropagation();
		if($('.cont').hasClass('peepify')) {
			$(this).parent().parent().siblings('.menu.people').removeClass('open');
		} else if ($('.cont').hasClass('eventify')) {
			$(this).parent().parent().siblings('.menu.events').removeClass('open');
		}
	});

	plus.on('click', function(e){
		var dupeRow = $('.row_template .row').html();
		$('.rows').append('<div class="row add">'+dupeRow+'</div>');
		addRow.show();
	});

	$(document).on('click', '.ancil', function(e){
		e.stopPropagation();
		$(this).next('menu').toggleClass('open');
	});

	$(document).on('click', '.menu.freq .list a, .menu.propers .list a', function(e){
		var menuProp = $(this).html();
		$(this).parent().parent().prev().html(menuProp+'<span class="arrow left"></span>');
		$(this).parent().parent().removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		if(menuProp === 'within') {
			$(this).parent().parent().siblings('p.within').addClass('active').siblings('.fre').removeClass('active');
		} else if (menuProp === 'between') {
			$(this).parent().parent().siblings('p.between').addClass('active').siblings('.fre').removeClass('active');
		} else if (menuProp === 'at least') {
			$(this).parent().parent().siblings('p.atleast').addClass('active').siblings('.fre').removeClass('active');
		} else if (menuProp === 'at most') {
			$(this).parent().parent().siblings('p.atmost').addClass('active').siblings('.fre').removeClass('active');
		} else if (menuProp === 'exactly') {
			$(this).parent().parent().siblings('p.exactly').addClass('active').siblings('.fre').removeClass('active');
		} else if (menuProp === 'is set' || menuProp === 'is not set') {
			$(this).parent().parent().siblings('.choco').hide();
		} else if (menuProp === 'contains' || menuProp === 'does not contain' || menuProp === 'equals' || menuProp === 'does not equal') {
			$(this).parent().parent().siblings('.choco').show();
		}
		e.preventDefault();
	});

});

