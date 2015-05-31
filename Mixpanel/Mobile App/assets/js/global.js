jQuery(document).ready(function($) {

	setTimeout(function(){
		$('.phone-wrap').show();
	}, 150);

	$('.project').on('click', function(){
		$(this).toggleClass('active');
		$('.project_menu').toggleClass('active');
	});

	$('input').on('focus', function(){
		$(this).prev().css("fill", "rgba(255,255,255,1)");
	});

	$('input').on('blur', function(){
		if($('.pass_field').val() === "password" && $('.email_field').val() === "jeff@mixpanel.com") {
			$('.sign-in').removeClass('parsley-error').addClass('success').text("Sign In");
		}
	});

	$('input').on('keyup', function(){
		if($('.pass_field').val().length >= 6 && $('.email_field').val().length !== 0) {
			$('.sign-in').addClass('success').addClass('active').text("Sign In");
		}
	});

	$('.sign-in').on('click', function(){
		if($('.pass_field').val() !== "password" || $('.email_field').val() !== "jeff@mixpanel.com") {
			$('.sign-in').addClass('parsley-error').text("Invalid email or password");
			setTimeout(function(){
				$('.sign-in.parsley-error').removeClass('parsley-error').text('Sign In');
			}, 3000);
		} else if ($('.pass_field').val() === "password" && $('.email_field').val() === "jeff@mixpanel.com") {
			$('.login_form').addClass('bye_bye');
			$('.two_factor_form').addClass('hi_there');
		}
	});

	$('.verify').on('click', function(){
		if($('.verification_field').val().length !== 7 ) {
			$('.verify').addClass('parsley-error').text('Invalid code');
			setTimeout(function(){
				$('.verify.parsley-error').removeClass('parsley-error').text('Verify');
			}, 3000);
		} else {
			$('.two_factor_form').addClass('bye_bye');
			$('.bg-gradient.blue').addClass('active');
			setTimeout(function(){
				$('.event-wrap').addClass('active');
			}, 500);
		}
	});

	$('.sign-in-bug.first').on('click', function(){
		$('.photo-bg').addClass('hide');
		$('.phone-wrap').addClass('ready');
		$('.intro-time').addClass('active');
		$('.indicator').addClass('half');
	});

	$('body').on('click', '.next', function(){
		$(this).removeClass('next');
		$(this).addClass('get-started').text('Sign In');
		$('.intro-time.active').addClass('double');
		$('.sign-in-top').fadeOut();
		$('.bg-gradient.purple').addClass('active');
		$('.step.one .content').addClass('go-away');
		$('.indicator').addClass('full');
		$('.step.one .icons').addClass('buh-bye');
		$('.slides').addClass('active');
		setTimeout(function(){
			$('.sliders').addClass('active');
		}, 650);
	});

	$('body').on('click', '.get-started', function(){
		$('.bg-gradient.blue').addClass('active');
		$('.intro-time').addClass('see-yas');
		$('.home').addClass('good-to-go');
		$('.indicator').fadeOut();
	});

	$('body').on('click', '.event-wrap li', function(){
		$(this).find('.check').toggleClass('active');
		setTimeout(function(){
			$('.view-panels').addClass('active');
		}, 500);
	});

	$('body').on('click', '.view-panels', function(){
		$('.event-wrap').removeClass('active');
		$('.dash').addClass('active');
	});

});
