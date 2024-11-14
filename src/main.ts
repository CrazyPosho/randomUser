import { ApiResponse } from "./index";
import { fetchData } from "./api";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <h1>API Fetcher - Random User</h1>
   
    <div id="results" class="results">
      <h2>Resultados:</h2>
      <div class="user-info">

          <p>Nombre:</p>
          <div id="name" class="value"></div>

          <p>Celular:</p>
          <div id="cell" class="value"></div>

          <div>Email:</div>
          <div id="email" class="value"></div>

          <div>Género:</div>
          <div id="genderValue" class="value"></div>

          <div>Ubicación:</div>
          <div id="location" class="value"></div>
        </div>
        <button id="btn">Buscar</button>
    </div>
  </div>
`;
  const url = "https://randomuser.me/api/";

  const nameValue = document.getElementById("name") as HTMLElement;
  const cellValue = document.getElementById("cell") as HTMLElement;
  const emailValue = document.getElementById("email") as HTMLElement;
  const genderValue = document.getElementById("genderValue") as HTMLElement;
  const locationValue = document.getElementById("location") as HTMLElement;
  const btn = document.getElementById("btn") as HTMLButtonElement;
  const displayData = async () => {
    const data = await fetchData<ApiResponse>(url);
    const user = data?.results[0];
    if (!data) return;
    nameValue.textContent = ` ${user?.name.first} ${user?.name.last}`;
    cellValue.textContent = user?.cell ?? "No disponible";
    emailValue.textContent = user?.email ?? "No disponible";
    genderValue.textContent = user?.gender ?? "No disponible";
    locationValue.textContent = user?.location.country ?? "No disponible";
  };

  btn.addEventListener("click", () => {
    displayData();
  });
});
