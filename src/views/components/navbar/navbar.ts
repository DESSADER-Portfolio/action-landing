export type NavbarOptions = {
  control: string;
  onChange?: (state: boolean) => void;
}

export interface INavbar {
  element: string,
  options: NavbarOptions;
}

class Navbar implements INavbar {
  public element: string;
  public options: NavbarOptions;

  private menu: HTMLElement;
  private menuActiveClass: string;
  private menuIsActive: boolean;

  private control: HTMLButtonElement;
  private controlActiveClass: string;

  private onChange: (state: boolean) => void;

  constructor(element: string, options: NavbarOptions) {
    const { control, onChange } = options;

    this.menu = document.querySelector(element);
    this.menuActiveClass = this.menu.classList[0] + ":active";
    this.menuIsActive = this.menu.classList.contains(this.menuActiveClass);

    this.control = document.querySelector(control);
    this.controlActiveClass = this.control.classList[0] + ":active";

    this.onChange = onChange;

    this.init();
  }

  private init() {
    this.control.addEventListener("click", () => {
      this.menuIsActive 
        ? this.close() 
        : this.open();
    });
  }

  public open() {
    this.toggleClasses();
    this.menuIsActive = true;
    this.onChange(this.menuIsActive);
    // do somthing when opening...
  }

  public close() {
    this.toggleClasses();
    this.menuIsActive = false;
    this.onChange(this.menuIsActive);
    // do somthing when closing...
  }

  private toggleClasses() {
    document.body.classList.toggle("no-scroll");
    this.menu.classList.toggle(this.menuActiveClass);
    this.control.classList.toggle(this.controlActiveClass);
  }
}

export default Navbar;