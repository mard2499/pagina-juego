// Estructura global de zonas
const zonas = {
  cultivo: []
};

// Función para generar 6 parcelas de cultivo en el mapa
function generarZonasCultivo() {
  const contenedorJuego = document.getElementById("juego");

  for (let i = 0; i < 6; i++) {
    const parcela = document.createElement("div");
    parcela.classList.add("parcela-cultivo");

    // Posicionamos en dos filas de 3
    const size = 60;
    const margin = 10;
    const col = i % 3;
    const row = Math.floor(i / 3);

    const left = 100 + (col * (size + margin));
    const top = 100 + (row * (size + margin));

    parcela.style.left = `${left}px`;
    parcela.style.top = `${top}px`;

    contenedorJuego.appendChild(parcela);

    // Guardamos su información lógica
    zonas.cultivo.push({
      estado: "vacio",   // "vacio", "sembrado", "listo"
      tiempo: 0,
      ocupado: false,
      elemento: parcela
    });
  }
}