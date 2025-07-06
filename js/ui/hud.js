// js/ui/hud.js

let recursoSeleccionado = null;

/**
 * Muestra los valores de todos los recursos en el HUD.
 */
function actualizarHUD() {
  for (const tipo in recursos) {
    const valor = document.getElementById(`valor-${tipo}`);
    if (valor) {
      valor.textContent = Math.floor(recursos[tipo].cantidad);
    }
  }
}

/**
 * Configura los clics en los recursos del HUD (excepto población).
 * Al hacer clic, se muestra la información detallada.
 */
function configurarClicksHUD() {
  document.querySelectorAll(".recurso").forEach(recurso => {
    recurso.addEventListener("click", () => {
      const tipo = recurso.dataset.tipo;

      if (tipo === "poblacion") {
        // Se maneja desde panelRoles.js
        return;
      }

      if (recursoSeleccionado === tipo) {
        recursoSeleccionado = null;
        document.getElementById("info-recurso").style.display = "none";
      } else {
        recursoSeleccionado = tipo;
        mostrarInfoRecurso(tipo);
      }
    });
  });
}

/**
 * Muestra el panel con información detallada del recurso seleccionado.
 */
function mostrarInfoRecurso(tipo) {
  const panel = document.getElementById("info-recurso");
  panel.innerHTML = `
    <h3>${tipo.toUpperCase()}</h3>
    <p><strong>Cantidad:</strong> ${Math.floor(recursos[tipo].cantidad)}</p>
    <p><strong>Producción:</strong> ${recursos[tipo].produccion}</p>
    <p><strong>Consumo:</strong> ${recursos[tipo].consumo}</p>
  `;
  panel.style.display = "block";
}