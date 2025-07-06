// js/ui/panelInfo.js

/**
 * Muestra un panel de información detallada sobre el recurso seleccionado.
 * Incluye producción, consumo y balance actual.
 */
function mostrarInfoRecurso(tipo) {
  const r = recursos[tipo];
  const panel = document.getElementById("info-recurso");

  const balance = r.produccion - r.consumo;

  panel.innerHTML = `
    <strong>📦 Recurso: ${tipo.toUpperCase()}</strong><br>
    💰 Cantidad: ${Math.floor(r.cantidad)}<br>
    🔄 Producción/seg: ${r.produccion}<br>
    🔥 Consumo/seg: ${r.consumo}<br>
    📊 Balance: ${balance >= 0 ? '+' + balance : balance}/seg
  `;

  panel.style.display = "block";
}