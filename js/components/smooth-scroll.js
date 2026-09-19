export function initSmoothScroll() {
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
