// em-site.js — спільні скрипти сайту (гамбургер-меню, FAQ-акордеон)

document.addEventListener('DOMContentLoaded', () => {
  // Гамбургер-меню
  const burger = document.querySelector('.em-burger');
  const mobileNav = document.querySelector('.em-mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
  }

  // FAQ-акордеон
  document.querySelectorAll('.em-faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.em-faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.em-faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.em-faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
