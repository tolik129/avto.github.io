$(function() {
	
	if (!Modernizr.svg) {
		$('.f-dev img').attr('src', 'http://blackriver.agency/brlogo/blackriver_0.png');
		
		$('.icon-svg').addClass('icon-png');
		$('.ai-svg').addClass('ai-png');
	}
	
	$('a').each(function() {
		var href = jQuery(this).attr('href');
		if (typeof href != 'undefined' && href != '' && (href.indexOf('http://') != -1 || href.indexOf('https://') != -1) && href.indexOf(window.location.hostname) == -1) {
			$(this).attr('rel', 'nofollow');
			$(this).attr('target', '_blank');
		}
	});
	
	/* Slide Menu */
	$('.hm-switch').on('click touchend', function() {
		$('.slide-menu').show(function() {
			$(this).removeClass('closed');
			$(this).addClass('opened');
		});
	});
	
	$('.slide-menu').swipe({
		swipeLeft: function() {
			$(this).addClass('closed');
			$(this).removeClass('opened');
		}
	});
	
	$(document).on('click', function(event) {
		if (!$(event.target).closest('.hm-switch, .slide-menu').length) {
			$('.slide-menu').addClass('closed');
			$('.slide-menu').removeClass('opened');
		}
		event.stopPropagation();
	});
	/* eo Slide Menu */
	
	$('#fast-buy').backstretch('assets/template/img/fast.jpg');
	$('#feedback').backstretch('assets/template/img/feedback.jpg');
	
	$('.order-more-link').on('click', function() {
		if (!$(this).is('.active')) {
			$('.order-more').slideDown();
			$(this).addClass('active');
		} else {
			$('.order-more').slideUp();
			$(this).removeClass('active');
		}
	});
	
	var easing = 'easeInOutCubic';
	
	$('.goto').bind('click', function(event) {
		goto($(this).attr('href'), event);
	});
	
	function goto(href, event) {
		event.preventDefault();
	
		href = href.split('#');
		href = href[1];
	
		$('html, body').animate({
			scrollTop: $('#' + href).offset().top
		}, 1300, easing);
	}
	
	//$('#buy-info ol').easyListSplitter({ colNumber: 2 });
	
	$('.fancy').fancybox({
		'transitionIn': 'fade',
		'transitionOut': 'fade',
		'prevEffect': 'fade',
		'nextEffect': 'fade'
	});
	
	$('input[type="tel"]').mask('8 (999) 999-99-99', {
		completed: function() {
			$('#button-feed').toggleClass('btn-completed');
		}
	});
	
	$('.autoplace').bind('focus', function() {
		if ($(this).val() === $(this).attr('rel')) {
			$(this).val('');
		}
	});
	$('.autoplace').bind('blur', function() {
		if ($(this).val().replace(/ /g, '') === '') {
			$(this).val($(this).attr('rel'));
		}
	});
	
	$('.modal').on('hidden.bs.modal', function(e) {
		resetForm($('.modal'));
		$('.modal select option:first').prop('selected', 'selected');
		$('.modal .form-box').removeClass('has-error');
		$('.modal input').removeClass('has-error');
		$('.modal-footer .btn').show();
		$('.modal-form-ajax').hide();
	});

});



function resetForm(el) {
  $('input, textarea', el).val('')
}


function validate_order() {
	var
	url   = $('#order-url'),
	name  = $('#order-name'),
	tel   = $('#order-tel'),
	car   = $('#order-car'),
	year  = $('#order-year'),
	price = $('#order-price'),
	text  = $('#order-text'),
	
	f_tel = false,
	
	error_class = 'has-error';
	
	var tel_check = tel.val();
	tel_check = tel_check.replace(/ /g, '');
	if (tel_check == '') {
		tel.parent().addClass(error_class);
		f_tel = false;
	} else {
		tel.parent().removeClass(error_class);
		f_tel = true;
	}
	
	if (f_tel) {
		$('.order-btn .btn').hide();
		$('.order-loader').show();
		
		var form = document.getElementById('form_order');
		var formData = new FormData(form);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/assets/template/forms/sendorder.php');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var data = xhr.responseText;
					
					$('.order-btn .btn').show();
					$('.order-loader').hide();
					
					if (data === 'ok') {
						resetForm('#order-form');
						swal({ title: 'Отправлено', text: 'Спасибо, Ваша заявка успешно отправлена!\n Мы свяжемся с Вами в ближайшее время!', type: 'success' });
						yaCounter26654415.reachGoal('zayavka');
					} else {
						swal({ title: 'Ошибка', text: 'Пожалуйста обновите страницу.\n И попробуйте еще раз!', type: 'error' });
					}
				}
			}
		};
		xhr.send(formData); 
	}
}


function validate_rate() {
	var
	url          = window.location.href,
	model        = $('#rate-model'),
	year         = $('#rate-year'),
	engine       = $('#rate-engine'),
	price        = $('#rate-price'),
	tel          = $('#rate-tel'),
	transmission = $('input[name="rate-transmission"]:checked'),
	
	f_tel = false,
	
	error_class = 'has-error';
	
	var tel_check = tel.val();
	tel_check = tel_check.replace(/ /g, '');
	if (tel_check == '') {
		tel.parent().addClass(error_class);
		f_tel = false;
	} else {
		tel.parent().removeClass(error_class);
		f_tel = true;
	}
	
	if (f_tel) {
		$('#rate-form .order-button .btn').hide();
		$('#rate-form .order-button .order-loader').show();
		
		var form = document.getElementById('form_rate');
		var formData = new FormData(form);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/assets/template/forms/sendrate.php');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var data = xhr.responseText;
					
					$('#rate-form .order-button .btn').show();
					$('#rate-form .order-button .order-loader').hide();
					
					if (data === 'ok') {
						resetForm('#rate-form');
						swal({ title: 'Отправлено', text: 'Спасибо, Ваша заявка на оценку успешно отправлена!\n Мы свяжемся с Вами в ближайшее время!', type: 'success' });
						yaCounter26654415.reachGoal('online-price');
					} else {
						swal({ title: 'Ошибка', text: 'Пожалуйста обновите страницу.\n И попробуйте еще раз!', type: 'error' });
					}
				}
			}
		};
		xhr.send(formData); 
	}
}


function validate_review() {
	var
	url   = window.location.href,
	name  = $('#review-name'),
	email = $('#review-email'),
	text  = $('#review-text'),
	
	f_name = f_email = f_text = false,
	
	email_pattern = /^[а-яА-ЯёЁa-zA-Z0-9._-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,10}$/,
	
	error_class = 'has-error';
	
	var name_check = name.val();
	name_check = name_check.replace(/ /g, '');
	if (name_check == '') {
		name.parent().addClass(error_class);
		f_name = false;
	} else {
		name.parent().removeClass(error_class);
		f_name = true;
	}
	
	if (email.val() == '') {
		email.parent().addClass(error_class);
		f_email = false;
	} else if (!email_pattern.test(email.val())) {
		email.parent().addClass(error_class);
		f_email = false;
	} else {
		email.parent().removeClass(error_class);
		f_email = true;
	}

	var text_check = text.val();
	text_check = text_check.replace(/ /g, '');
	if (text_check == '') {
		text.parent().addClass(error_class);
		f_text = false;
	} else {
		text.parent().removeClass(error_class);
		f_text = true;
	}
	
	if (!f_name || !f_email || !f_text) {
		return;
	}
		
	$('#review-form .order-btn .btn').hide();
	$('#review-form .order-loader').show();	
	
	$.ajax({
		url: 'assets/template/forms/send.php',
		type: 'post',
		data: {
			type_form : 'review',
			url       : url,
			name      : name.val(),
			email     : email.val(),
			text      : text.val()
		},
		dataType: 'json',
		success: function(json) {
			$('#review-form .order-btn .btn').show();
			$('#review-form .order-loader').hide();

			if (json.success) {
				resetForm($('#form_review'));
				swal({ title: 'Отправлено', text: 'Спасибо, Ваш отзыв был успешно отправлен!', type: 'success' });
			} else {
				swal({ title: 'Ошибка', text: 'Попробуйте еще раз!', type: 'error' });
			}
		}
	});
	
}

function validate_feedback() {
	var
	url   = window.location.href,
	//name  = $('#mail-name'),
	tel   = $('#feed-tel'),
	//email = $('#mail-email'),
	//text  = $('#mail-text'),

	//f_name = f_email = f_text = false,
	
	f_tel = false,
	
	//email_pattern = /^[а-яА-ЯёЁa-zA-Z0-9._-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,10}$/,

	error_class = 'has-error';

	/*var name_check = name.val();
	name_check = name_check.replace(/ /g, '');
	if (name_check == '') {
		name.parent().addClass(error_class);
		f_name = false;
	} else {
		name.parent().removeClass(error_class);
		f_name = true;
	}*/
	
	/*if (email.val() == '') {
		email.parent().addClass(error_class);
		f_email = false;
	} else if (!email_pattern.test(email.val())) {
		email.parent().addClass(error_class);
		f_email = false;
	} else {
		email.parent().removeClass(error_class);
		f_email = true;
	}*/

	var tel_check = tel.val();
	tel_check = tel_check.replace(/ /g, '');
	if (tel_check === '') {
		tel.parent().addClass(error_class);
		f_tel = false;
	} else {
		tel.parent().removeClass(error_class);
		f_tel = true;
	}
	
	/*var text_check = text.val();
	text_check = text_check.replace(/ /g, '');
	if (text_check == '') {
		text.parent().addClass(error_class);
		f_text = false;
	} else {
		text.parent().removeClass(error_class);
		f_text = true;
	}*/

	if (f_tel) {
		//alert(tel.val());
		$.ajax({
			url: 'assets/template/forms/send.php',
			type: 'post',
			data: {
				type_form: 'feed',
				url: url,
				//name: name.val(),
				tel: tel.val(),
				//email: email.val(),
				//text: text.val()
			},
			dataType: 'json',
			success: function(json) {
				resetForm('#feedback');
				yaCounter26654415.reachGoal('question');
				swal({ title: 'Отправлено', text: 'Спасибо, Ваша заявка успешно отправлена!\n Мы свяжемся с Вами в ближайшее время!', type: 'success' });
			}
		});
	}
}
