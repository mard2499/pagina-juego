window.onload = () => {
  inicializarJuego();
  crearCiudadanos();
};




const infoCaja = document.getElementById("info-recurso");

document.querySelectorAll(".recurso").forEach(recurso => {
  recurso.addEventListener("click", () => {
    const tipo = recurso.dataset.tipo;
    mostrarInfoRecurso(tipo);
  });
});

function mostrarInfoRecurso(tipo) {
  let produccion = Math.floor(Math.random() * 3);
  let consumo = Math.floor(Math.random() * 3);

  infoCaja.innerHTML = `
    <strong>📦 Recurso: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</strong><br>
    🔄 Producción actual: ${produccion}/seg<br>
    🔥 Consumo actual: ${consumo}/seg
  `;
  infoCaja.style.display = "block";
}