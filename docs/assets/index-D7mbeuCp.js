(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();async function a(r){try{const o=await fetch(r);if(!o.ok)throw new Error("La red tiene es un bobo");return await o.json()}catch(o){return console.error("Hubo un error:",o),null}}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
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
`;const r="https://randomuser.me/api/",o=document.getElementById("name"),l=document.getElementById("cell"),c=document.getElementById("email"),t=document.getElementById("genderValue"),n=document.getElementById("location"),i=document.getElementById("btn"),s=async()=>{const d=await a(r),e=d==null?void 0:d.results[0];d&&(o.textContent=` ${e==null?void 0:e.name.first} ${e==null?void 0:e.name.last}`,l.textContent=(e==null?void 0:e.cell)??"No disponible",c.textContent=(e==null?void 0:e.email)??"No disponible",t.textContent=(e==null?void 0:e.gender)??"No disponible",n.textContent=(e==null?void 0:e.location.country)??"No disponible")};i.addEventListener("click",()=>{s()})});
