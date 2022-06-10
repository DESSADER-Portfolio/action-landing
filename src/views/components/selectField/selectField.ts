import { gsap } from "gsap";

export interface ISelectField {
  element: string;
  selected?: string;
}

class SelectField implements ISelectField {
  public element: string;
  public selected: string;

  private select: HTMLDivElement;
  private selectValue: HTMLLIElement;
  private selectIsOpen: boolean;
  private rootClassName: string;

  private control: HTMLDivElement;
  private list: HTMLUListElement;
  private options: HTMLLIElement[];

  constructor(element: string, selected?: string) {
    this.select = document.querySelector(element);
    this.selected = selected;
    this.selectIsOpen = false;
    this.rootClassName = this.select.classList[0];

    this.control = this.select.querySelector(`.${this.rootClassName}__control`);
    this.list = this.select.querySelector(`.${this.rootClassName}__list`);
    this.options = Array.from(this.list.querySelectorAll(`.${this.rootClassName}__list-item`));

    this.init();
  }
  
  private init() {
    if(this.selected) {
      const option: HTMLLIElement = this.list.querySelector(`[data-value='${this.selected}']`);
      if(option) {
        this.setValue(option);
      }
    }

    this.select.addEventListener("click", () => {
      this.selectIsOpen ? this.close() : this.open();
    });

    this.options.forEach((option) => {
      option.addEventListener("click", () => this.setValue(option));
    });

    document.addEventListener("click", (e: MouseEvent) => {
      if(!this.select.contains(e.target as Node)) {
        this.close();
      }
    });
  }

  public setValue(option: HTMLLIElement) {
    if(this.selectValue) {
      this.selectValue.classList.remove("selected");
    }

    this.selectValue = option;
    this.selectValue.classList.add("selected");
    this.control.innerHTML = option.innerText;
    this.select.setAttribute("data-selected", this.selectValue.getAttribute("data-value"));
  }

  public open() {
    this.selectIsOpen = true;
    gsap.to(this.list, {
      display: "block",
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.15,
      ease: "expoOut"
    });
  }

  public close() {
    this.selectIsOpen = false;
    gsap.to(this.list, {
      display: "none",
      opacity: 0,
      transform: "translateY(-30px)",
      duration: 0.15,
      ease: "expoOut"
    });
  }

  public getValue() {
    if(this.selectValue) {
      return this.selectValue.getAttribute("data-value");
    }
  }
}

export default SelectField;