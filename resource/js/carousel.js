document.addEventListener('DOMContentLoaded', function() {

	const carousel = document.querySelector('.carousel');
	const carouselImg = carousel.querySelector('img');
	const galleryImages = document.querySelectorAll('.gallery-item img');
	const btnLeft = carousel.querySelector('#carouselControlLeft');
	const btnRightt = carousel.querySelector('#carouselControlRight');

	carouselControls();

	btnRightt.addEventListener('click', function() {
		if (+carouselImg.dataset.img === galleryImages.length - 1) {
			carouselImg.dataset.img = galleryImages.length - 1;
		} else {
			++carouselImg.dataset.img;
		}
		carouselControls();
		carouselImg.src = galleryImages[+carouselImg.dataset.img].src;
	});

	btnLeft.addEventListener('click', function() {
		if (+carouselImg.dataset.img === 0) {
			carouselImg.dataset.img = 0;
		} else {
			--carouselImg.dataset.img;
		}
		carouselControls();
		carouselImg.src = galleryImages[+carouselImg.dataset.img].src;
	});

	function carouselControls() {
		if (carouselImg.dataset.img == galleryImages.length - 1) {
			btnRightt.style.visibility = 'hidden';
		} else if (carouselImg.dataset.img == 0) {
			btnLeft.style.visibility = 'hidden';
		} else {
			btnRightt.style.visibility = 'visible';
			btnLeft.style.visibility = 'visible';
		}
	}

});