import styles from "./Card.module.css";
export default interface CardProps {
  nombreUsuario: string;
  cambiarUsuario: () => void;
}

export const Card = ({
  nombreUsuario,
  cambiarUsuario,
}: CardProps): HTMLElement => {
  const card = document.createElement("div");

  card.innerHTML = `
   <div class="${styles.card}">
        <div class="${styles.banner}"></div>
        <img src="https://via.placeholder.com/128" alt="Profile picture" class="${styles.profilePic}">
        <div class="${styles.content}">
            <h2 id="label">My password is</h2>
            <h1 class="password" id="password">${nombreUsuario}</h1>
            <div class="${styles.icons}">
                <svg class="${styles.icon}" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <svg class="${styles.icon}" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <!-- Otras SVGs -->
            </div>
            <button id="btn" class="${styles.button}">Cambiar User</button>
        </div>
    </div>
  `;

  const botonCambiarUsuario = card.querySelector("#btn") as HTMLButtonElement;

  botonCambiarUsuario.addEventListener("click", cambiarUsuario);

  return card;
};
