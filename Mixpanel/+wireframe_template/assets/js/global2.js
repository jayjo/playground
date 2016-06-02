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
		$('.modal.introduction, .overlay').removeClass('open');
		$('.pulse.one').addClass('active').addClass('blink');
	});

	function onBoarding(){
		$document.on('click', '.pulse.one', function(e){
			e.stopPropagation();
			$('.tip.one, highlight.one').addClass('open');
			$('.pulse.one').removeClass('active');
			$('.pulse.two').addClass('active');
			setTimeout(function(){
				$('.pulse.two').addClass('blink');
			}, 300);
		});
		$document.on('click', '.pulse.two', function(e){
			e.stopPropagation();
			$('.tip.two, highlight.two').addClass('open');
			$('highlight.one, .tip.one').removeClass('open');
			$('.pulse.two').removeClass('active');
			$('.pulse.four, .leftbtn, .rightbtn').addClass('active');
			setTimeout(function(){
				$('.pulse.four').addClass('blink');
			}, 405);
		});
		$document.on('click', '.pulse.four', function(e){
			e.stopPropagation();
			$('.tip.three').addClass('open');
			$('.pulse.four').removeClass('active');
			$('highlight.two, .tip.two').removeClass('open');
			$(leftBtn).addClass('highlighted');
		});
		$document.on('click', '.success button', function(){
			$('.overlay').removeClass('open');
			setTimeout(function(){
				$('.pulse.five').addClass('active').addClass('blink');
				$('.filterfunction').addClass('visible');
			}, 500);
		});
		$document.on('click', '.pulse.five', function(e){
			e.stopPropagation();
			$('.tip.four').addClass('open');
			$('.pulse.five').removeClass('active');
			$('highlight.four').addClass('open');
			$('.filterfunction added').addClass('visible');
		});
		$document.on('click', '.pulse.six', function(e){
			e.stopPropagation();
			$('.tip.five').addClass('open');
			$('.pulse.six').removeClass('active');
			$('highlight.five').addClass('open');
			$('.groupbyfunction added').addClass('visible');
			$(leftBtn).addClass('active').addClass('highlighted');
		});
		$document.on('click', '.pulse.seven', function(e){
			e.stopPropagation();
			$('.tip.six').addClass('open');
			$('.pulse.seven').removeClass('active');
			$('highlight.six').addClass('open');
			$('.reducefunction added').addClass('visible');
			$(leftBtn).addClass('active').addClass('highlighted');
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

	var viewed = 0,
			loaderLine = '.loader.line',
			overlay = '.overlay',
			tableArea = '.tablearea',
			table = 'table.one',
			tableTwo = 'table.two',
			tableThree = 'table.three',
			tableFour = 'table.three',
			modalSuccess = '.modal.success',
			modalFinal = '.modal.final',
			groupByFunction = '.groupbyfunction',
			reduceFunction = '.reducefunction',
			error = '.error',
			leftBtn = '.leftbtn',
			rightBtn = '.rightbtn';

	function loading(){
		$(leftBtn).html('Loading...');
		$(loaderLine).addClass('visible');
		$(leftBtn).removeClass('highlighted').removeClass('active');
		$(rightBtn).removeClass('active');
		setTimeout(function(){
			$(leftBtn).html('Run Query');
			$(loaderLine).removeClass('visible');
		}, 2400);
	}

	function modalView(){
		if(viewed === 1){
			setTimeout(function(){
				$(table).addClass('active');
				$(tableArea).addClass('active');
				$(modalSuccess).addClass('open');
				$(overlay).addClass('open');
				$(error).hide();
			}, 2400);
		} else if (viewed === 2){
			var typedEvent = $('highlight.four.edit').text();
			$(tableArea).removeClass('active');
			setTimeout(function(){
				$(table).removeClass('active');
				$(tableTwo).addClass('active');
				$('table.two td:first-child').text(typedEvent);
				$(tableArea).addClass('active');
				$(groupByFunction).addClass('visible');
				$('.pulse.six').addClass('active').addClass('blink');
			}, 2400);
		} else if (viewed === 3){
			$(tableArea).removeClass('active');
			setTimeout(function(){
				$(tableTwo).removeClass('active');
				$(tableThree).addClass('active');
				$(tableArea).addClass('active');
				$(reduceFunction).addClass('visible');
				$('.pulse.seven').addClass('active').addClass('blink');
			}, 2400);
		}	else if (viewed === 4){
			$(tableArea).removeClass('active');
			setTimeout(function(){
				$(tableThree).removeClass('active');
				$(tableFour).addClass('active');
				$(tableArea).addClass('active');
				$(modalFinal).addClass('open');
				$(overlay).addClass('open');
			}, 2400);
		}
	}

	$document.on('click', leftBtn, function(e){
		viewed++;
		loading();
		modalView();
		console.log('clicked');
	});

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

	$document.on('keyup', function(e){
		if($('highlight.four.edit').text() === 'YourEvent'){
		} else {
			$(leftBtn).addClass('active').addClass('highlighted');
		}
		e.preventDefault();
	});

});