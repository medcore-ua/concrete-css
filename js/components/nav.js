export function initNavToggle() {
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
}
