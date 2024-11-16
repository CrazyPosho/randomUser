import { Card } from "./components/Card";
import "./styles.css";
import CardProps from "./components/Card";

let name = "pepe";
const changeName = () => {
  name = "papo";
};

const cardProps: CardProps = {
  nombreUsuario: name,
  cambiarUsuario: changeName,
};
document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  const cardElement = Card(cardProps);
  if (app) {
    app.appendChild(cardElement);
  }

  const btn = document.getElementById("btn") as HTMLButtonElement;
  const label = document.getElementById("label") as HTMLElement;

  btn.addEventListener("click", () => {
    label.textContent = "pepe";
  });
});
