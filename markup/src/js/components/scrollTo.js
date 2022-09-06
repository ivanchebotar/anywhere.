import 'Plugins/scrollToPlugin';

export function initAnchors() {
	new SmoothScroll({
		anchorLinks: 'a[href^="#"]:not([href="#"])',
		extraOffset: 100,
    activeClasses: 'link',
		wheelBehavior: 'none',
    easing: 'swing',
    animDuration: 1000
	});
}
