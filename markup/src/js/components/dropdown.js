import 'Plugins/dropdownPlugin';

export function initOpenClose() {
	jQuery('.dropdown-holder').openClose({
		activeClass: 'active',
		opener: '.dropdown__opener',
		slider: '.dropdown__slide',
		animSpeed: 300,
		hideOnClickOutside: true,
    effect: 'slide'
	});
}
