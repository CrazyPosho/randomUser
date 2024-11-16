import { Card } from "./components/Card";
import "./styles.css";

const main = async () => {
  try {
    const container = document.getElementById("app"); // Asegúrate de tener un elemento con id="app" en tu HTML
    if (container) {
      const cardElement = await Card();
      container.appendChild(cardElement);
    }
  } catch (error) {
    console.error("Error in main:", error);
  }
};

main();
