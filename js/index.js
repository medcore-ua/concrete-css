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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Concrete.init());
  } else {
    Concrete.init();
  }
  window.Concrete = Concrete;
}

export default Concrete;
