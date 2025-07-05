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

    // 🔄 Si ya está seleccionado, lo deselecciona
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

