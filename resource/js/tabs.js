document.addEventListener('DOMContentLoaded', function() {

	const tabsItems = document.querySelectorAll('.tabs-item');
	const tabsNavigationBlock = document.querySelector('.tabs-navigation');
	const tabsNavigation = tabsNavigationBlock.querySelectorAll('div');

	$(window).on('scroll load', showTabs);

	tabsNavigationBlock.addEventListener('click', function(e) {
		if (e.target.dataset.tab) {
			const tab = e.target;
			for (let item of tabsNavigation) {
				if (item === tab) {
					item.classList.remove('tabs-navigation--disable');
					item.classList.add('tabs-navigation--active');
				} else {
					item.classList.remove('tabs-navigation--active');
					item.classList.add('tabs-navigation--disable')
				}
				
			}
			for (let item of tabsItems) {
				if (e.target.dataset.tab === item.dataset.tab) {
					item.classList.remove('tabs-item--disable');
					item.classList.add('tabs-item--active');
				} else {
					item.classList.remove('tabs-item--active');
					item.classList.add('tabs-item--disable');
				}
			} 
		}
	});

	function showTabs() {
		if (tabsNavigationBlock.classList.contains('tabs-navigation-show')) {
			setTimeout(function() {
				tabsNavigation[0].classList.remove('tabs-navigation--disable');
				tabsNavigation[0].classList.add('tabs-navigation--active');
				tabsItems[0].classList.add('tabs-item--active');
				window.removeEventListener('scroll', showTabs);
			}, 1000);
		}
	}

});