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
     * Accordion Toggle
     */
    initAccordion: function() {
      const questions = document.querySelectorAll('.accordion__question');
      
      questions.forEach(question => {
        question.addEventListener('click', function() {
          const item = this.closest('.accordion-item');
          const answer = item.querySelector('.accordion__answer');
          answer.classList.toggle('open');
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Concrete.init());
  } else {
    Concrete.init();
  }

  window.Concrete = Concrete;
})();
