(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();async function c(o){try{const e=await fetch(o);if(!e.ok)throw new Error("La red tiene es un bobo");return await e.json()}catch(e){return console.error("Hubo un error:",e),null}}const a="https://randomuser.me/api/",s=document.getElementById("name"),d=document.getElementById("cell"),u=document.getElementById("email"),m=document.getElementById("genderValue"),f=document.getElementById("location"),v=document.getElementById("btn");document.querySelector("#app").innerHTML=`
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
`;const p=async()=>{const o=await c(a),e=o==null?void 0:o.results[0];o&&(s.textContent=` ${e==null?void 0:e.name.first} ${e==null?void 0:e.name.last}`,d.textContent=(e==null?void 0:e.cell)??null,u.textContent=(e==null?void 0:e.email)??null,m.textContent=(e==null?void 0:e.gender)??null,f.textContent=(e==null?void 0:e.location.country)??null)};v.addEventListener("click",()=>{p()});
