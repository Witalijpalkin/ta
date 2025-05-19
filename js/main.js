
  const toggles = document.querySelectorAll('.accordion__toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const item = toggle.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion__item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });