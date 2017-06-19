jQuery(document).ready(function($) {

	/////// STUFF FOR THE CE STYLEGUIDE

	// hljs.initHighlightingOnLoad();

	function scrollyBiz(){
		$(window).on('scroll', function(e){
			var Y = $(window).scrollTop();
			if( Y >= $(window).height() - 50 ) {
				$('header').addClass('scrolled');
			} else {
				$('header').removeClass('scrolled');
			}
		});
	}
	scrollyBiz();

	$('.total-of input').on('focus', function(e){
		$('menucontainer').addClass('visible');
		e.preventDefault();
	});

	$('.total-of input').on('blur', function(e){
		$('menucontainer').removeClass('visible');
		e.preventDefault();
	});

	/////// STUFF FOR THE MENUS INTERACTION

	var document = $(document);

	function growContainerOne() {
		$('menuContainer').addClass('props');
		$('.show-text').addClass('inactive');
		$('.prop-text').addClass('active');
		$('.search-text').text("Search properties");
	}

	function growContainerTwo() {
		$('menuContainer').addClass('tabbed');
		$('.prop-text').addClass('inactive');
		$('.props-text').addClass('active');
		$('icon.arrow').hide();
		$('icon.arrowback').show();
		if($('.between-this').hasClass('active')){
			$('menuContainer').addClass('between');
		}
	}

	function shrinkContainerOne() {
		$('menuContainer').removeClass('props');
		$('.show-text').removeClass('inactive');
		$('.prop-text').removeClass('active');
		$('.search-text').text("Search");
	}

	function shrinkContainerTwo() {
		$('menuContainer').removeClass('tabbed');
		$('.props-text').removeClass('active');
		$('.prop-text').removeClass('inactive');
		$('.search-text').text("Search properties");
		$('icon.arrowback').hide();
		$('icon.arrow').show();
		if($('menuContainer').hasClass('between')){
			$('menuContainer').removeClass('between');
		}
	}

	var headText = $('header p').text();

	$('pane.one .col.three a').click(function() {

		var text = $(this).text();
		$('header p.prop-text').text(text);

			growContainerOne();

	});

	$('pane.two .col.three a').click(function() {

		var text = $(this).text();
		$('header p.props-text').text(text);

			growContainerTwo();

	});

	var item = $('menu pane.three .col ul li a');

	item.click(function(e){

		$(this).parent().toggleClass('active');
		var checkNumber = $('menu pane.three .col ul li.active').length;

		if($('menu pane.three .col ul li.active').length > 0){
			$('.number p').text(checkNumber + " " + "selected");
			$('button.update').addClass('active');
		} else {
			$('button.update').removeClass('active');
			$('.number p').text("");
		}

	});

	$('icon.arrow').click(function() {
		shrinkContainerOne();
	});

	$('icon.arrowback').click(function() {
		shrinkContainerTwo();
	});

	$(document).ready(function(){
		$('.search-text').text("Search");
		// growContainerOne();
		// growContainerTwo();
	});

	// CHECKBOX NUMBER UPDATE

	// DROPDOWN INTERACTIONS

	$('.drop').on('click', function(event){
		event.stopPropagation();
		$('.dropdown').toggleClass('open');
	});

	$(window).click(function(e){
		$('.dropdown').removeClass('open');
		e.preventDefault();
	});

	// SCROLLING BEHAVIOR

	$('.scrollable').on('scroll', function(e){
		var Y = $('.scrollable').scrollTop();
		if( Y >= 44 ) {
			$('.top-area').addClass('scrolled');
		} else {
			$('.top-area').removeClass('scrolled');
		}
	});

	//Dropdown selector

	// $(window).on('click', function(){
	// 	var contentHeight = $('menucontainer').css('height');
	// 	var contentWidth = $('menucontainer').css('width');

	// 	var contHeight = $('.content').height(contentHeight);
	// 	var contWidth = $('.content').width(contentWidth);
	// 	$('.content').height(contentHeight);
	// });

	var dropItem = $(".dropdown ul li a");

	dropItem.click(function(){
		var dropText = $(this).text();

		if(dropText === "Is between"){
			$('.drop p').text(dropText);
			$(this).parent().addClass('active').siblings().removeClass('active');
			$('menucontainer').addClass('between');
			$('.between-this').addClass('active');
			$('.input-area, .string, .number').addClass('inactive');
			$('button.update').addClass('active');
		} else if(dropText === "Equals"){
			$('.drop p').text(dropText);
			$(this).parent().addClass('active').siblings().removeClass('active');
			$('menucontainer').removeClass('between');
			$('.between-this').removeClass('active');
			$('.input-area, .string, .number').removeClass('inactive');
			$('button.update').removeClass('active');
		}
	});

});
