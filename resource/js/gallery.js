document.addEventListener('DOMContentLoaded', function() {

	const gallery = document.querySelector('#gallery');
	const galleryPopup = document.querySelector('#galleryPopup');
	const galleryPopupImg = document.querySelector('#galleryPopupImg');
	const galleryClose = document.querySelector('#galleryClose');
	const galleryControlLeft = document.querySelector('#galleryControlLeft');
	const galleryControlRight = document.querySelector('#galleryControlRight');
	const galleryImages = document.querySelectorAll('.gallery-item img');

	function galleryControls() {
		if (galleryPopupImg.dataset.img == galleryImages.length - 1) {
			galleryControlRight.style.visibility = 'hidden';
		} else if (galleryPopupImg.dataset.img == 0) {
			galleryControlLeft.style.visibility = 'hidden';
		} else {
			galleryControlRight.style.visibility = 'visible';
			galleryControlLeft.style.visibility = 'visible';
		}
	}

	gallery.addEventListener('click', function(e) {
		if (e.target.nodeName == 'IMG') {
			galleryPopupDisableScroll();
			galleryPopupImg.dataset.img = e.target.dataset.img;
			galleryControls();
			galleryPopup.style.display = 'flex';
			galleryPopup.classList.add('gallery-popup-fadeIn');
			galleryPopupImg.src = e.target.src;
		}
	});

	galleryClose.addEventListener('click', function() {
			galleryPopup.classList.remove('gallery-popup-fadeIn');
			galleryPopup.classList.add('gallery-popup-fadeOut');
			galleryPopup.addEventListener('animationend', galleryPopupClose);
			galleryPopupEnableScroll();
	});

	galleryControlRight.addEventListener('click', function() {
		if (+galleryPopupImg.dataset.img === galleryImages.length - 1) {
			galleryPopupImg.dataset.img = galleryImages.length - 1;
		} else {
			++galleryPopupImg.dataset.img;
		}
		galleryControls();
		galleryPopupImg.src = galleryImages[+galleryPopupImg.dataset.img].src;
	});

	galleryControlLeft.addEventListener('click', function() {
		if (+galleryPopupImg.dataset.img === 0) {
			galleryPopupImg.dataset.img = 0;
		} else {
			--galleryPopupImg.dataset.img;
		}
		galleryControls();
		galleryPopupImg.src = galleryImages[+galleryPopupImg.dataset.img].src;
	});


	function galleryPopupDisableScroll() {
		let x = window.scrollX;
		let y = window.scrollY;
		window.onscroll = function() {
			window.scrollTo(x, y)
		}
	}

	function galleryPopupEnableScroll() {
		window.onscroll = function() {}
	}

	function galleryPopupClose() {
		galleryPopup.style.display = 'none';
		galleryPopup.classList.remove('gallery-popup-fadeOut');
		galleryPopup.removeEventListener('animationend', galleryPopupClose);
	}

});