jQuery(document).ready(function($) {

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
		}
	});

});
