export function initAccordion() {
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
}

export function initDetailsAccordion() {
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
}
