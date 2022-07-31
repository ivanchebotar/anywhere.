import 'Plugins/mobileNavPlugin';

// open-close init
export function initMobileNav() {
  jQuery('body').mobileNav({
		menuActiveClass: 'menu-active',
		menuOpener: '.header-menu__opener'
	});
}
