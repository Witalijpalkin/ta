
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.h_nav');
  const menuLink = document.querySelector('.h_nav-link');
  const isMobile = window.innerWidth <= 560;

    toggle.addEventListener('click', (e) => {
      toggle.classList.toggle('burger--active');
      e.stopPropagation();
      if (menu.style.display === 'none' || !menu.style.display) {
        menu.style.display = 'block';
        document.body.style.overflow = 'hidden'; // при открытии

      } else {menu.style.display = 'none';
              document.body.style.overflow = '';
      }
    });

    menuLink.addEventListener('click', () => {
       if (isMobile) {
        menu.style.display = 'none';
        document.body.style.overflow = '';
        toggle.classList.remove('burger--active');
       }
    })

    document.addEventListener('click', (e) => {
      if (isMobile && menu.style.display === 'block' && !menu.contains(e.target)) {
        menu.style.display = 'none';
        document.body.style.overflow = '';
        toggle.classList.remove('burger--active');
      }
    })

    document.addEventListener('keydown', (e) => {
  if (isMobile && e.key === 'Escape') {
    menu.style.display = 'none';
    document.body.style.overflow = '';
    toggle.classList.remove('burger--active')
  }
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto', // Показывать 3 карточки одновременно
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  //breakpoints: {
  //  768: { slidesPerView: 2 },
  //  576: { slidesPerView: 1 },
  //}
});

