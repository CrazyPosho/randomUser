(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const u="_card_86x7q_1",d="_banner_86x7q_10",m="_profilePic_86x7q_15",f="_content_86x7q_24",p="_icons_86x7q_41",b="_icon_86x7q_41",_="_button_86x7q_58",y="_errorCard_86x7q_78",c={card:u,banner:d,profilePic:m,content:f,icons:p,icon:b,button:_,errorCard:y};async function a(n){try{const e=await fetch(n);if(!e.ok)throw new Error("La red tiene problema");return await e.json()}catch(e){return console.error("Hubo un error:",e),null}}const l="https://randomuser.me/api/",h=async()=>{const n=await a(l),e=document.createElement("div");n?e.innerHTML=`
      <div class="${c.card}">
        <div class="${c.banner}"></div>
        <img src="${n.results[0].picture.large}" alt="Profile picture" class="${c.profilePic}">
        <div class="${c.content}">
          <h2 id="label">Mi Nombre es</h2>
          <h1 class="name" id="name">${n.results[0].name.first} ${n.results[0].name.last}</h1>
          <h1 class="email" id="email">${n.results[0].email}</h1>            
          <button id="btn" class="${c.button}">Cambiar Usuario</button>
        </div>
      </div>
    `:e.innerHTML=`
        <div class="${c.errorCard}">Error al obtener datos</div>
      `;const i=e.querySelector("#btn");return i&&i.addEventListener("click",async()=>{try{const o=await a(l),r=e.querySelector("img"),t=e.querySelector("#name"),s=e.querySelector("#email");o&&r&&t&&s&&o.results[0]&&(r.setAttribute("src",o.results[0].picture.large),t.textContent=`${o.results[0].name.first} ${o.results[0].name.last}`,s.textContent=`${o.results[0].email}`)}catch(o){console.error("Error updating user:",o)}}),e},g=async()=>{try{const n=document.getElementById("app");if(n){const e=await h();n.appendChild(e)}}catch(n){console.error("Error in main:",n)}};g();
