import 'Plugins/fixedScrollPlugin';

// initialize fixed blocks on scroll
export function initStickyScrollBlock() {
  jQuery('.sidebar').stickyScrollBlock({
    setBoxHeight: true,
    activeClass: 'fixed-position',
    positionType: 'fixed',
    extraTop: 90,
		extraBottom: 150
  });
}
