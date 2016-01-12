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
		$(this).parent().siblings('.droptext').html(text);
		e.preventDefault();
	});

	function closeThings() {
		$('*').removeClass('open');
	}

	$document.click(function(){
		closeThings();
	});

	$document.on('click', 'a.x, .skip', function(e){
		$(this).parent().hide();
		e.preventDefault();
	});

	$document.ready(matchHeight);
	$window.on('resize', matchHeight);

	function matchHeight(){
		var sideBarHeight = $('.sidebar').outerHeight(),
				reportAreaHeight = $('.reportarea').outerHeight();
		console.log(sideBarHeight, reportAreaHeight);
		if(reportAreaHeight <= sideBarHeight){
			$('.reportarea').css('height', sideBarHeight+"px");
		}
	}

	/////// DO NOT EDIT THIS CODEZ
	/////// YOU CAN CODEZ BELOW THIS LINE

});