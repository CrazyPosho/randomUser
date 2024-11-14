import { ApiResponse } from "./index";
import "./styles.css";
import { fetchData } from "./api";
const url = "https://randomuser.me/api/";

const nameValue = document.getElementById("name") as HTMLElement;
const cellValue = document.getElementById("cell") as HTMLElement;
const emailValue = document.getElementById("email") as HTMLElement;
const genderValue = document.getElementById("genderValue") as HTMLElement;
const locationValue = document.getElementById("location") as HTMLElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

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
const displayData = async () => {
  const data = await fetchData<ApiResponse>(url);
  const user = data?.results[0];
  if (!data) return;
  nameValue.textContent = ` ${user?.name.first} ${user?.name.last}`;
  cellValue.textContent = user?.cell ?? null;
  emailValue.textContent = user?.email ?? null;
  genderValue.textContent = user?.gender ?? null;
  locationValue.textContent = user?.location.country ?? null;
};

btn.addEventListener("click", () => {
  displayData();
});
