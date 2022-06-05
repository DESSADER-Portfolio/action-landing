import { gsap } from "gsap";

export interface IPreloader {
  element: string;
}

class Preloader implements IPreloader {
  public element: string;
  private preloader: HTMLElement;

  constructor(element: string) {
    this.preloader = document.querySelector(element);
  }

  public show(callback?: () => void) {
    gsap.to(this.preloader, {
      opacity: 1,
      display: "flex",
      duration: 0.5,
      onComplete: () => callback()
    });
  }

  public hide(callback?: () => void) {
    gsap.to(this.preloader, {
      opacity: 0,
      display: "none",
      duration: 0.5,
      onComplete: () => callback()
    });
  }
}

export default Preloader;