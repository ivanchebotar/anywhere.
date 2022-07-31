import ready, { HTML } from './utils';
import initAccordion from './components/accordion';
import initAddingClass from './components/addClass';
import { initOpenClose } from './components/dropdown';
import initFadeText from './components/fadeText';
import { initStickyScrollBlock } from './components/fixedScroll';
import initLeaveSearch from './components/leaveSearch';
import { initMobileNav } from './components/mobileNav';
import initPreloader from './components/preloader';
import { initAnchors } from './components/scrollTo';
import initSwitcher from './components/themeSwitcher'

ready(() => {
  HTML.classList.add('is-loaded');
  initAccordion();
  initAddingClass();
  initOpenClose();
  initFadeText();
  initStickyScrollBlock();
  initLeaveSearch();
  initMobileNav();
  initPreloader();
  initAnchors();
  initSwitcher();
});
