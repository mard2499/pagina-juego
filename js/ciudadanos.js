let ciudadanos = [];

function crearCiudadanos() {
  const contenedor = document.getElementById("ciudadanos");
  contenedor.innerHTML = "";
  ciudadanos = [];

  const total = Math.floor(recursos.poblacion.cantidad);

  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.classList.add("ciudadano");

    // Posición aleatoria
    const x = Math.random() * 280;
    const y = Math.random() * 280;
    div.style.left = x + "px";
    div.style.top = y + "px";

    contenedor.appendChild(div);

    ciudadanos.push({ elemento: div });
  }
}

function moverCiudadanos() {
  ciudadanos.forEach(c => {
    const x = Math.random() * 280;
    const y = Math.random() * 280;
    c.elemento.style.left = x + "px";
    c.elemento.style.top = y + "px";
  });
}