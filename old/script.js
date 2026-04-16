// script.js
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('burger-menu');
  if (!burger || !menu) return;
  const toggleMenu = () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
  };

  burger.addEventListener('click', toggleMenu);
  // Keyboard accessibility (Enter/Space)
  burger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
  // Close menu when clicking a link
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      burger.classList.remove('active');
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const clickOutside = !menu.contains(e.target) && !burger.contains(e.target);
    if (clickOutside) {
      burger.classList.remove('active');
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
});
