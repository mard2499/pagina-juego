function crearCiudadanos() {
  ciudadanos = []; // Limpiar el array global, no volver a declarar

  const contenedor = document.getElementById("ciudadanos");
  contenedor.innerHTML = "";

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

    // Aquí podrías agregar más propiedades si quieres, como id o rol
    ciudadanos.push({
      elemento: div,
      id: i,
      rol: "libre"
    });
  }
}


function moverCiudadanos() {
  const contenedor = document.getElementById("ciudadanos"); // 
  const ancho = contenedor.offsetWidth - 20;
  const alto = contenedor.offsetHeight - 20;

  ciudadanos.forEach(c => {
    const x = Math.random() * ancho;
    const y = Math.random() * alto;
    c.elemento.style.left = x + "px";
    c.elemento.style.top = y + "px";
  });
}
