
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
  //let initialYvalue = window.scrollY;
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

//function smartStickyHeader() {
//    // Находим элемент хедера по классу
//  const header = document.querySelector('.header');
//    // Сохраняем последнее значение прокрутки по вертикали
//  let lastScrollY = window.scrollY;
//   // Флаг, чтобы requestAnimationFrame не вызывался слишком часто
//  let ticking = false;
//   // Состояния для отслеживания текущего положения меню
//  let isFixed = false;   // Зафиксировано ли меню
//  let isHidden = false;  // Скрыто ли оно

//    // Функция, которая будет вызываться при scroll (но через requestAnimationFrame)
//  function update() {
//    // Текущее положение скролла
//    const currentY = window.scrollY;
//        // Разница между текущим и предыдущим положением скролла
//    const scrollDelta = currentY - lastScrollY;
//        // Если прокручено более 100px вниз и меню ещё не зафиксировано — фиксируем его
//    if (currentY > 100 && !isFixed) {
//      header.classList.add('header--fixed');
//      isFixed = true;
//    }
//    // прокрутка ниже меню более 10px, скрываем меню
//    if(scrollDelta > 10 && currentY > 200 && !isHidden) {
//      header.classList.add('header--hidden');
//      isHidden = true;
//    }
//      // Если прокручиваем вверх на 100px — показать
//    if (scrollDelta < -100 && isHidden) {
//      header.classList.remove('header--hidden');
//      isHidden = false;
//    }
//      // Если вернулись в начало — убрать фиксацию
//    if (currentY < 50 && isFixed) {
//      header.classList.remove('header--fixed', 'header--hidden');
//      isFixed = false;
//      isHidden = false;
//    }

//      // Обновляем последнее положение скролла
//    lastScrollY = currentY;
//     // Разрешаем следующую итерацию requestAnimationFrame
//    ticking = false;
//  }

//  // Обработчик скролла — запускает update через requestAnimationFrame
//  function onScroll() {
//    // Проверяем, не запущен ли уже update
//    if (!ticking) {
//      window.requestAnimationFrame(update);
//      ticking = true;
//    }
//  }

//    // Назначаем обработчик скролла
//  window.addEventListener('scroll', onScroll);
//}

//smartStickyHeader();

//const header = document.querySelector('.header');
//let lastScrollY = window.scrollY;
//const headerHeight = 70;
//let ticking = false;


//window.addEventListener('scroll', () => {
//  if (!ticking) {
//    window.requestAnimationFrame(() => {
//      const currentScroll = window.scrollY;

//      if (currentScroll > 70 && currentScroll > lastScrollY) {
//        // Прокрутка вниз
//        header.classList.add('header--fixed', 'header--visible');
//        if (lastScrollY > headerHeight + headerHeight && lastScrollY > initialYvalue) {
//          hide();
//        } else {
//          show();
//        }
//      } else if (currentScroll <= 70) {
//        // Вернулись наверх
//        header.classList.remove('header--fixed', 'header--visible');
//      }

//      initialYvalue = currentScroll;
//      lastScrollY = currentScroll;
//      ticking = false;
//    });

//    ticking = true;
//  }
//});

function smartStickyHeader() {
  const header = document.querySelector('.header');

  let lastScrollY = window.scrollY; // Последнее положение прокрутки
  let currentScrollY = window.scrollY; // Текущее положение прокрутки
  let scrollDirection = null; // Направление прокрутки
  let scrollUpDistance = 0; // Сколько прокрутили вверх
  let isFixed = false; // Хедер зафиксирован
  let isHidden = false; // Хедер скрыт

  function onScroll() {
    currentScrollY = window.scrollY;

    // Определяем направление прокрутки
    if (currentScrollY > lastScrollY) {
      // Вниз
      scrollDirection = 'down';
      scrollUpDistance = 0; // сбрасываем накопление вверх
    } else if (currentScrollY < lastScrollY) {
      // Вверх
      if (scrollDirection === 'up') {
        scrollUpDistance += lastScrollY - currentScrollY;
      } else {
        scrollUpDistance = lastScrollY - currentScrollY;
        scrollDirection = 'up';
      }
    }

    // Зафиксировать, если прокрутили вниз больше 100px
    if (currentScrollY > 70 && !isFixed) {
      header.classList.add('header--fixed');
      isFixed = true;
    }

    // Скрыть при прокрутке вниз
    if (scrollDirection === 'down' && isFixed && !isHidden && currentScrollY > 200) {
      header.classList.add('header--hidden');
      isHidden = true;
    }

    // Показать при прокрутке вверх более чем на 100px
    if (scrollDirection === 'up' && isFixed && isHidden && scrollUpDistance > 100) {
      header.classList.remove('header--hidden');
      isHidden = false;
    }

    // Убрать фиксацию, если вернулись вверх
    if (currentScrollY <= 50 && isFixed) {
      header.classList.remove('header--fixed', 'header--hidden');
      isFixed = false;
      isHidden = false;
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', onScroll);
}

smartStickyHeader();

