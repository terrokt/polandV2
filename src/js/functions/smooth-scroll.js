export const scrollTo = (element) => {
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: element.offsetTop // - document.querySelector('.nav').clientHeight,
	});
}
