jQuery(document).ready(function($) {

	/////// DO NOT EDIT THIS CODEZ

	var $document = $(document),
			$window = $(window);

	$document.on('focus blur', 'input[type=text], input[type=email]', function(){
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

	$document.on('click', '.drop', function(e){
		e.stopPropagation();
		$(this).toggleClass('open');
		$('.drop').not(this).removeClass('open');
	});

	$document.on('click', '.drop a', function(e){
		var text = $(this).text();
		$(this).parent().siblings('.droptext').text(text);
		e.preventDefault();
	});

	function closeThings() {
		$('*').removeClass('open');
	}

	$document.click(function(){
		closeThings();
	});

	$document.on('click', 'a.x, .skip', function(e){
		$(this).parent().removeClass('open');
		$('.overlay').removeClass('open');
		e.preventDefault();
	});

	$document.ready(matchHeight);
	$window.on('resize', matchHeight);
	$document.on('change', matchHeight);

	function matchHeight(){
		var sideBarHeight = $('.sidebar').outerHeight(),
				reportAreaHeight = $('.reportarea').outerHeight();
		if(reportAreaHeight <= sideBarHeight){
			$('.reportarea').css('height', sideBarHeight+"px");
		} else if(sideBarHeight <= reportAreaHeight){
			$('.sidebar').css('height', reportAreaHeight+"px");
		}
	}

	/////// DO NOT EDIT THIS CODEZ
	/////// YOU CAN CODEZ BELOW THIS LINE

	$document.ready(function(){
		$('.console').css('height', $('.queryconsole').innerHeight()+"px");
		$('.console code').css('height', $('.console').innerHeight()+"px");
	});

	$document.on('click', '.introduction button', function(e){
		$('.modal.introduction').removeClass('open');
		$('.overlay').removeClass('open');
		$('.pulse.one').addClass('active').addClass('blink');
	});

	function onBoarding(){
		$document.on('click', '.pulse.one', function(e){
			e.stopPropagation();
			$('.tip.one').addClass('open');
			$('highlight.one').addClass('open');
			$('.pulse.one').removeClass('active');
			$('.pulse.two').addClass('active');
			setTimeout(function(){
				$('.pulse.two').addClass('blink');
			}, 300);
		});
		$document.on('click', '.pulse.two', function(e){
			e.stopPropagation();
			$('.tip.one').removeClass('open');
			$('.tip.two').addClass('open');
			$('highlight.one').removeClass('open');
			$('highlight.two').addClass('open');
			$('.pulse.two').removeClass('active');
			$('.pulse.three').addClass('active');
			setTimeout(function(){
				$('.pulse.three').addClass('blink');
			}, 800);
		});
		$document.on('click', '.pulse.three', function(e){
			e.stopPropagation();
			$('.tip.two').removeClass('open');
			$('.tip.three').addClass('open');
			$('.pulse.three').removeClass('active');
			$('highlight.two').removeClass('open');
		});
		$document.on('click', '.success button', function(){
			$('.overlay').removeClass('open');
			setTimeout(function(){
				$('.transform').addClass('visible');
				$('highlight.three').addClass('open');
			}, 500);
		});
	}
	onBoarding();

	function tableSwitcher(){
		var pill = 'nav.pills a',
				exportType = $('.export span');
		$document.on('click', pill, function(e){
			e.stopPropagation();
			if($(this).hasClass('table')){
				$(this).addClass('current').siblings().removeClass('current');
				exportType.text('CSV');
			} else if($(this).hasClass('json')){
				$(this).addClass('current').siblings().removeClass('current');
				exportType.text('JSON');
			}
			e.preventDefault();
		});
	}
	tableSwitcher();

	function lineLoader(){
		$('.leftbtn').on('click', function(e){
			$(this).html('Loading...');
			$('.loader.line').addClass('visible');
			setTimeout(function(){
				$('.loader.line').fadeOut('fast');
				$('.modal.success').addClass('open');
				$('.overlay').addClass('open');
				$('.tablearea, table').addClass('active');
				$('.error').hide();
				$('.leftbtn').html('Run Query');
			}, 2400);
		});
	}
	lineLoader();

	function transformation(){
		$document.on('click', '.transform .list a', function(e){
			var thisText = $(this).attr('class');
			$('.transform').removeClass('visible');
			$('.transformation, .comment, .options').addClass('visible');
			if(thisText === 'filter'){
				$('.transformation').html(
					'.filter(function(event){ return event.name == ' + '"YourEvent"' + ' });'
				);
				$('.comment').html('<span>// Returns all events named ' + '"YourEvent"</span>');
			} else if(thisText === 'map'){
				$('.transformation').html(
					'.map(function(event){ return event.properties.referrer });'
				);
				$('.comment').html('<span>// pull the "referrer" property off each event for further analysis. The new collection is a list of strings.</span>');
			} else if(thisText === '.reduce()'){

			} else if(thisText === '.groupBy()'){

			} else if(thisText === '.groupByUser()'){

			}
		});
	}
	transformation();

	$document.on('click', '.options button', function(e){
		$('.options').removeClass('visible');
		$('.transformation, .comment').html('').removeClass('visible');
		if($(this).hasClass('another')){
			$('.transform').addClass('visible').children('.droptext').text('try a transformation...');
		} else if($(this).hasClass('myown')){
			$('.pulse, table, .tablearea').removeClass('active');
			$('.error').show();
		}
	});
});