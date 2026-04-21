/**
 * Concrete CSS - JavaScript Components
 * Minimal JavaScript for interactive components
 */

(function() {
  'use strict';

  const Concrete = {
    init: function() {
      this.initNavToggle();
      this.initAccordion();
      this.initDetailsAccordion();
      this.initSmoothScroll();
    },

    /**
     * Mobile Navigation Toggle
     */
    initNavToggle: function() {
      const toggles = document.querySelectorAll('.nav-toggle');
      
      toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
          const nav = this.parentElement.querySelector('.nav');
          if (nav) {
            nav.classList.toggle('open');
            this.setAttribute('aria-expanded', 
              nav.classList.contains('open') ? 'true' : 'false'
            );
          }
        });
      });

      document.addEventListener('click', function(e) {
        const navs = document.querySelectorAll('.nav.open');
        navs.forEach(nav => {
          const toggle = nav.parentElement.querySelector('.nav-toggle');
          if (toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    },

    /**
     * Accordion Toggle (JS-based)
     * Works with .accordion-trigger and .accordion-content
     */
    initAccordion: function() {
      const triggers = document.querySelectorAll('.accordion-trigger');
      
      triggers.forEach(trigger => {
        if (trigger.tagName === 'BUTTON') {
          trigger.addEventListener('click', function() {
            const container = this.closest('[data-accordion-mode]') || this.closest('.accordion-container');
            const mode = container ? container.getAttribute('data-accordion-mode') : 'multiple';
            
            // Find the content element (next sibling or inside container)
            let content = this.nextElementSibling;
            if (!content || !content.classList.contains('accordion-content')) {
              content = this.parentElement.querySelector('.accordion-content');
            }
            
            if (mode === 'single') {
              const allTriggers = container.querySelectorAll('.accordion-trigger');
              allTriggers.forEach(t => {
                let c = t.nextElementSibling;
                if (!c || !c.classList.contains('accordion-content')) {
                  c = t.parentElement.querySelector('.accordion-content');
                }
                if (c !== content) c.classList.remove('open');
              });
              content.classList.toggle('open');
            } else {
              content.classList.toggle('open');
            }
          });
        }
      });
    },
    
    /**
     * Native Details Accordion
     * Single mode for details elements with .accordion-trigger
     */
    initDetailsAccordion: function() {
      document.querySelectorAll('details').forEach(details => {
        details.addEventListener('toggle', function() {
          if (this.open) {
            const container = this.closest('[data-accordion-mode]');
            const mode = container ? container.getAttribute('data-accordion-mode') : 'multiple';
            
            if (mode === 'single') {
              const all = container.querySelectorAll('details[open]');
              all.forEach(d => {
                if (d !== this) d.removeAttribute('open');
              });
            }
          }
        });
      });
    },

    /**
     * Smooth Scroll
     */
    initSmoothScroll: function() {
      document.querySelectorAll('[data-scroll-target]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const targetId = this.getAttribute('data-scroll-target');
          const target = document.querySelector(targetId);
          
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  };

  Concrete.init();
  window.Concrete = Concrete;
})();
