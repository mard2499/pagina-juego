// Inicia juego
window.onload = () => {
  inicializarJuego();
  crearCiudadanos();
};

// actualiza juego
setInterval(actualizarJuego, 1000);


// Informacion de recurso seleccionado, envia informacion al juego.js para actulizar inofrmacion de esta misma

const infoCaja = document.getElementById("info-recurso");

  // revisa donde esta el cursor
  document.querySelectorAll(".recurso").forEach(recurso => {
    recurso.addEventListener("click", () => {
      const tipo = recurso.dataset.tipo;

      // 👥 Si es poblacion, abrir panel de roles
      if (tipo === "poblacion") {
        const panel = document.getElementById("panel-roles");
        panel.style.display = panel.style.display === "none" ? "block" : "none";
        actualizarPanelRoles();
        return; // ⛔ Salimos aquí, no seguimos con mostrarInfoRecurso
      }

      // Para los demás recursos, comportamiento normal
      if (recursoSeleccionado === tipo) {
        recursoSeleccionado = null;
        document.getElementById("info-recurso").style.display = "none";
      } else {
        recursoSeleccionado = tipo;
        mostrarInfoRecurso(tipo);
      }
    });
  });




// Muestra informacion de recurso
function mostrarInfoRecurso(tipo) {
  const r = recursos[tipo]; // recurso seleccionado
  const balance = r.produccion - r.consumo;

  document.getElementById("info-recurso").innerHTML = `
    <strong>📦 Recurso: ${tipo}</strong><br>
    💰 Cantidad: ${Math.floor(r.cantidad)}<br>
    🔄 Producción/seg: ${r.produccion}<br>
    🔥 Consumo/seg: ${r.consumo}<br>
    📊 Balance: ${balance >= 0 ? '+' + balance : balance}/seg
  `;
  document.getElementById("info-recurso").style.display = "block";
}




// Muestra roles

roles.libres = Math.floor(recursos.poblacion.cantidad);
actualizarPanelRoles(); 

function actualizarPanelRoles() {
  const panel = document.getElementById("panel-roles");
  panel.innerHTML = `<p>👤 Ciudadanos libres: <strong>${roles.libres}</strong></p>`;

  // Recorremos las claves de roles, excepto 'libres'
  Object.keys(roles).forEach(rol => {
    if (rol !== 'libres') {
      panel.innerHTML += `
        <p>
          ${obtenerIconoRol(rol)} ${capitalizar(rol)}: <strong>${roles[rol]}</strong>
          <button onclick="asignarRol('${rol}')">[+]</button>
        </p>
      `;
    }
  });
}



