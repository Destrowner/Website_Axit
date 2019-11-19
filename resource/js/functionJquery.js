// ===================================== пример работы на JQ
$(function() {
	
	let mql = window.matchMedia('all and (min-width: 900px)');

	window.addEventListener('load', function() {

		if (mql.matches) {

			function inWindow(s){
				let scrollTop = $(window).scrollTop();
				let windowHeight = $(window).height();
				let currentEls = $(s);
				let result = [];
				currentEls.each(function(){
					let el = $(this);
					let offset = el.offset();
					if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
						result.push(this);
				});
				return $(result);
			}

			// CONTACT
			let userInfo = $('.contact .user-info input');
			userInfo.addClass('contactUser-hide');

			let userMessage = $('.contact textarea');
			userMessage.addClass('contactMessage-hide');
			
			$(window).on('scroll', function() {

				let userInfoAnimate = inWindow('.contact .user-info input');
				userInfoAnimate.addClass('contactUser-show');
				userInfoAnimate.on('transitionend', function() {
					$(this).removeAttr('class');
				});

				let userMessageAnimate = inWindow('.contact textarea');
				userMessageAnimate.addClass('contactMessage-show');
				userMessageAnimate.on('transitionend', function() {
					$(this).removeAttr('class');
				});

				let contactBtnAnimate = inWindow('.contact .secondary-btn');
				contactBtnAnimate.addClass('contactBtn-animate');

			});
		}
	});
});