import styles from "./Card.module.css";
import { fetchData } from "../data";
import { UserData } from "..";
const url = "https://randomuser.me/api/";

export const Card = async (): Promise<HTMLElement> => {
  const data: UserData | null = await fetchData(url);

  const card = document.createElement("div");
  if (data) {
    card.innerHTML = `
      <div class="${styles.card}">
        <div class="${styles.banner}"></div>
        <img src="${data.results[0].picture.large}" alt="Profile picture" class="${styles.profilePic}">
        <div class="${styles.content}">
          <h2 id="label">Mi Nombre es</h2>
          <h1 class="name" id="name">${data.results[0].name.first} ${data.results[0].name.last}</h1>
          <h1 class="email" id="email">${data.results[0].email}</h1>            
          <button id="btn" class="${styles.button}">Cambiar Usuario</button>
        </div>
      </div>
    `;
  } else {
    card.innerHTML = `
        <div class="${styles.errorCard}">Error al obtener datos</div>
      `;
  }

  const botonCambiarUsuario = card.querySelector("#btn");
  if (botonCambiarUsuario) {
    botonCambiarUsuario.addEventListener("click", async () => {
      try {
        const newData: UserData | null = await fetchData(url);
        const img = card.querySelector("img");
        const name = card.querySelector("#name");
        const email = card.querySelector("#email");
        if (newData) {
          if (img && name && email && newData.results[0]) {
            img.setAttribute("src", newData.results[0].picture.large);
            name.textContent = `${newData.results[0].name.first} ${newData.results[0].name.last}`;
            email.textContent = `${newData.results[0].email}`;
          }
        }
      } catch (error) {
        console.error("Error updating user:", error);
      }
    });
  }

  return card;
};
