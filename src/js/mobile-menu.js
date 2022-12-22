(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileLinks = document.querySelector(".mobile-menu__list");
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const innerMenu = document.querySelector('.mobile-menu__list');
  const body = document.querySelector('body');
  let isOpen = false;

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
    
    if (!isOpen) {
      innerMenu.classList.add('animate__animated', 'animate__fadeInLeft');
      isOpen = true;
    }
    else {
      innerMenu.classList.remove('animate__animated', 'animate__fadeInLeft');      
      isOpen = false;
    }
  };
  

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  mobileLinks.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.classList.toggle('no-scroll');
    innerMenu.classList.remove('animate__animated', 'animate__fadeInLeft');
    isOpen = false;
  });
})();
