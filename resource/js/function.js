document.addEventListener('DOMContentLoaded', function() {

	let mql = window.matchMedia('all and (min-width: 900px)');

	if (mql.matches) {

		$(window).on('load scroll', showVisible);
		
		// FOOTER
		let footer = document.querySelector('footer');
		footer.querySelector('.footer-wrapper').classList.add('footer-hide');
			
		// HEADERS
		let headerMain = document.querySelectorAll('.header-main');
		for (let header of headerMain) {
			header.classList.add('headerMain-hide');
		}

		// PRIMARY-BTN
		let primaryBtn = document.querySelectorAll('.primary-btn');
		for (let btn of primaryBtn) {
			btn.classList.add('primaryBtn-hide');
		}

		//MAIN-SCREEN
		const menu = document.querySelector('.nav');
		const socialmedia = document.querySelector('.social-media');
		const mainIntro = document.querySelector('.main');
		const mainIntroAnimateEnd = mainIntro.querySelector('p:last-of-type');
		const mainForm = document.querySelector('.main-form');

		menu.classList.add('nav-hide');
		socialmedia.classList.add('social-media-hide');
		mainIntro.classList.add('main-hide');
		mainForm.classList.add('main-form-hide');

		window.setTimeout(function() {
			menu.classList.add('nav-show');
			socialmedia.classList.add('social-media-show');
			mainIntro.classList.add('main-show');
			mainForm.classList.add('main-form-show');
				
			menu.addEventListener('transitionend', function() {
				menu.classList.remove('nav-hide', 'nav-show');
			});

			socialmedia.addEventListener('transitionend', function() {
				socialmedia.classList.remove('social-media-hide', 'social-media-show');
			});

			mainIntroAnimateEnd.addEventListener('transitionend', function() {
				mainIntro.classList.remove('main-hide', 'main-show');
			});

			mainForm.addEventListener('transitionend', function() {
				mainForm.classList.remove('main-form-hide', 'main-form-show');
			});

		}, 200);
			

		// SUBLIST
		let sublistBlock = document.querySelector('.sublist');
		sublistBlock.classList.add('sublist-hide');

		// PICTURE
		let pictureDescription = document.querySelector('.picture__description');
		pictureDescription.classList.add('picture__description-hide');
		let gallery = document.querySelector('.picture-gallery');
		let galleryBlock = document.querySelectorAll('.gallery-item');
		for(let item of galleryBlock) {
			item.classList.add('gallery-item-hide');
		}

		// FEATURES
		let featuresBlock = document.querySelectorAll('.features .features-item');
		for (let item of featuresBlock) {
			item.classList.add('features-item-hide');
		}

		// PRICING
		let pricingBlock = document.querySelectorAll('.pricing .pricing-item');
		for (let item of pricingBlock) {
			item.classList.add('pricing-item-hide');
		}

		let pricingList = document.querySelectorAll('.pricing .pricing-item__description');
		for (let item of pricingList) {
			item.classList.add('pricing-item__description-animateStart');
		}

		// TESTIMONIALS
		let commentBlock = document.querySelectorAll('.testimonials-item__text');
			
		for (let comment of commentBlock) {
			comment.innerHTML = '';
			comment.classList.add('testimonials-item__text-hide');
		}

		let testimonialImg = document.querySelectorAll('.testimonials .person-img');
		for (let img of testimonialImg) {
			img.classList.add('person-img-hide');
		}

		let testimonialName = document.querySelectorAll('.testimonials .person-name');
		for (let name of testimonialName) {
			name.classList.add('person-name-hide');
		}
			
		// PRINTED-TEXT
		let comments = [
			'We had a big vision, and BigCommerce has not only supported us, they\'ve grown with us.',
			'You don\'t need to be an expert in coding or HTML. It\'s been designed for anybody to use.',
			'We don\'t have to worry about traffic or checkout because BigCommerce scales.'
		];

		function printedText(elem, index) {
			let counter = 0;
			let print = function() {
				counter++;
				if (counter <= comments[index].length) {
					elem.innerHTML = comments[index].substr(0, counter);
					setTimeout(print, 20);
				}
			}
			print();
		}

		function showVisible() {
			if (isVisible(footer)) {
				footer.querySelector('.footer-wrapper').classList.add('footer-show');
			}

			for (let header of headerMain) {
				if (isVisible(header)) {
					header.classList.add('headerMain-show');
					header.addEventListener('transitionend', function() {
						this.classList.remove('headerMain-hide');
					});
				}
			}

			for (let btn of primaryBtn) {
				if (isVisible(btn)) {
					btn.classList.add('primaryBtn-show');
					btn.addEventListener('transitionend', function() {
							this.classList.remove('primaryBtn-hide');
					});
				}
			}

			for (let i = 0; i < commentBlock.length; i++) {
				if (isVisible(commentBlock[i])) {
					commentBlock[i].classList.add('testimonials-item__text-show');
					commentBlock[i].addEventListener('transitionend', function() {
						this.classList.remove('testimonials-item__text-hide');
						printedText(commentBlock[i], i);
					});
				}
			}

			for (let img of testimonialImg) {
				if (isVisible(img)) {
					img.classList.add('person-img-show');
					img.addEventListener('transitionend', function() {
						this.classList.remove('person-img-hide');
					});
				}
			}

			for (let name of testimonialName) {
				if (isVisible(name)) {
					name.classList.add('person-name-show');
					name.addEventListener('transitionend', function() {
						this.classList.remove('person-name-hide');
					});
				}
			}

			for (let item of pricingBlock) {
				if (isVisible(item)) {
					item.classList.add('pricing-item-show');
					item.querySelector('.pricing-item__description').classList.add('pricing-item__description-animateEnd');
					item.addEventListener('transitionend', function() {
						this.classList.remove('pricing-item-hide');
					}); 
				}
			}

			for (let item of featuresBlock) {
				if (isVisible(item)) {
					item.classList.add('features-item-show');
					item.addEventListener('transitionend', function() {
						this.classList.remove('features-item-hide');
					});
				}
			}

			for (let i = 0; i < galleryBlock.length; i++) {
				if (isVisible(gallery)) {
					setTimeout(function() {
						galleryBlock[i].classList.add('gallery-item-show');
					}, 50 * i);
				}
			}

			if (isVisible(pictureDescription)) {
				pictureDescription.classList.add('picture__description-show');
				pictureDescription.addEventListener('transitionend', function() {
					pictureDescription.classList.remove('picture__description-hide');
				});
			}

			if (isVisible(sublistBlock)) {
				sublistBlock.classList.add('sublist-show');
				sublistBlock.addEventListener('transitionend', function() {
					sublistBlock.classList.remove('sublist-remove');
				});
			}

				

		}

	}
	
	$(window).on('load scroll', showTabs);

	function showTabs() {
		if(isVisible(tabsBlock)) {
			tabsBlock.classList.add('tabs-navigation-show');
			tabsBlock.addEventListener('transitionend', function() {
				tabsBlock.classList.remove('tabs-navigation-hide');
			});
		}
	}

	// TABS
	let tabsBlock = document.querySelector('.tabs-navigation');
	tabsBlock.classList.add('tabs-navigation-hide');

	function isVisible(elem) {
		let coords = elem.getBoundingClientRect();
		let windowHeight = document.documentElement.clientHeight;
		// видны верхний ИЛИ нижний край элемента
		let topVisible = coords.top > 0 && coords.top < windowHeight;
		let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
		return topVisible || bottomVisible;
	}

});