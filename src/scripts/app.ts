import { Navbar } from "@components/js";

new Navbar(".menu", {
  control: ".menu-control",
  onChange: (menuIsOpen) => menuIsOpen
});