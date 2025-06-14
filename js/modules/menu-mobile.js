import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (this.eventos === undefined) {
      this.eventos = ['click', 'touchstart'];
    } else {
      this.eventos = eventos;
    }

    this.classActive = 'active';
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.classActive);
    this.menuButton.classList.add(this.classActive);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.classActive);
      this.menuButton.classList.remove(this.classActive);
    });
  }
  addMenuMobile() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobile();
    }
    return this;
  }
}
