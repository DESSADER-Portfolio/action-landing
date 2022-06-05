import { Navbar, Preloader } from "@components/js";

const hidePreloaderDelay = 200;
const preloader = new Preloader(".preloader");

new Navbar(".menu", {
  control: ".menu-control",
  onChange: (menuIsOpen) => menuIsOpen
});

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.hide(() => {
      document.body.classList.remove("no-scroll");
    });
  }, hidePreloaderDelay);
});