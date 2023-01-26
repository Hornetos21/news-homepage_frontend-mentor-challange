window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const burger = menu.children[1];
  const list = menu.children[2];
  const overlay = menu.children[3];

  function checkWindowSize() {
    if (window.innerWidth >= 768) {
      list.classList.remove('menu__list-right');
      list.classList.add('menu__list-top');
    } else {
      list.classList.add('menu__list-right');
      list.classList.remove('menu__list-top');
    }
  }
  checkWindowSize();

  menu.addEventListener('click', (e) => {
    if (e.target.matches('div.menu__burger') || e.target.matches('.overlay')) {
      burger.classList.toggle('menu__burger_close');
      list.classList.toggle('menu__list-right_active');
      overlay.classList.toggle('hide');
    }
  });

  window.addEventListener('resize', checkWindowSize);
});
