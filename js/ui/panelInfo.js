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

  // Posicionar el panel al lado del recurso
  const recursoElemento = document.querySelector(`.recurso[data-tipo="${tipo}"]`);
  const rect = recursoElemento.getBoundingClientRect();

  panel.style.left = `${rect.left}px`;
  panel.style.top = `${rect.bottom + 5}px`;
  panel.style.display = "block";
}