
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.header__nav-link');
  const isMobile = window.innerWidth <= 800;

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

    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', () => {
        if (isMobile) {
          menu.style.display = 'none';
          document.body.style.overflow = '';
          toggle.classList.remove('burger--active');
        }
      })
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
  spaceBetween: 30,
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

//const hideNav = () => {
//  const headerHeight = 70;
//  let initialYvalue = window.scrollY;
//  let body = document.querySelector('body');
//  let isFixed = false;

//  window.addEventListener('scroll', (ev) => {
//    const scrollY = window.scrollY;
//    if (scrollY > headerHeight) {
//      makeItFixed();
//    } else {
//      makeItNotFixed();
//    }
//  });

//  function makeItFixed() {
//    body.classList.add('header__hidden');
//    isFixed = true;

//  }
//  function makeItNotFixed() {
//    body.classList.remove('header__hidden');
//    isFixed = false;
//  }
//}

//hideNav();

const header = document.querySelector('.header');
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScroll = window.scrollY;

      if (currentScroll > 70 && currentScroll > lastScrollY) {
        // Прокрутка вниз
        header.classList.add('header--fixed', 'header--visible');
      } else if (currentScroll <= 70) {
        // Вернулись наверх
        header.classList.remove('header--fixed', 'header--visible');
      }

      lastScrollY = currentScroll;
      ticking = false;
    });

    ticking = true;
  }
});

