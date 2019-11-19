document.addEventListener('DOMContentLoaded', function() {

	const menu = document.querySelector('.menu-mobile');
	const menuBtn = menu.querySelector('button');

	menuBtn.addEventListener('click', function() {
		menu.classList.toggle('menu-mobile--active');
		if (menu.classList.contains('menu-mobile--active')) {
			menuBtn.innerText = 'close';
		} else {
			menuBtn.innerText = 'menu';
		}
	});

});