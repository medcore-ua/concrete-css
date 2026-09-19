import { initNavToggle } from './components/nav.js';
import { initAccordion, initDetailsAccordion } from './components/accordion.js';
import { initSmoothScroll } from './components/smooth-scroll.js';

const Concrete = {
  init: function() {
    this.initNavToggle();
    this.initAccordion();
    this.initDetailsAccordion();
    this.initSmoothScroll();
  },
  initNavToggle,
  initAccordion,
  initDetailsAccordion,
  initSmoothScroll
};

// Initialize by default when loaded in a browser
if (typeof window !== 'undefined') {
  Concrete.init();
  window.Concrete = Concrete;
}

export default Concrete;
