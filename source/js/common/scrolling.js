const scrollWindow = (function () {

	const init = function () {
			_setUpListners();
		};
	const _setUpListners = function () {
		window.addEventListener('scroll', debounce(checkSlide));
	}

	// less speed of scroll
	function debounce(func, wait = 20, immediate = true) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
			  timeout = null;
			  if ( !immediate ) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if ( callNow ) func.apply(context, args);
		};
	};

	const tl = new TimelineMax();
	const sections = document.querySelectorAll('section');
	const serviceItem = document.querySelectorAll('.service__item');

	function checkSlide() {

		let check;

		sections.forEach(section => {

			// half way through the image
			const slideInAt = (window.scrollY + window.innerHeight) - section.clientHeight / 4;
			// bottom of the image
			const bottomSection = section.offsetTop + section.clientHeight;
			const isHalfShown = slideInAt > section.offsetTop;
			const isNotScrolledPast = window.scrollY < bottomSection;

			if (isHalfShown && isNotScrolledPast) {
				section.classList.add('action')
			} else {
				section.classList.remove('action')
			};			
		});

		return check;
	}

	return {
		init: init
	}

})();

scrollWindow.init();