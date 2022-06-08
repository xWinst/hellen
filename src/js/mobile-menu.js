(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    closeMenu: document.querySelectorAll('.mobile-menu-link'),
    closeMenu2: document.querySelectorAll('[data-modal-open2]'),
    menu: document.querySelector('.mobile-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenu.forEach(link => link.addEventListener('click', toggleMenu));
  refs.closeMenu2.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
