let dia = 1;
let comida = 10;
let poblacion = 5;
let ciudadanos = [];

function crearCiudadanos() {
  const contenedor = document.getElementById("ciudadanos");
  contenedor.innerHTML = ""; // limpia anteriores

  ciudadanos = [];

  for (let i = 0; i < poblacion; i++) {
    const div = document.createElement("div");
    div.classList.add("ciudadano");

    // posición inicial aleatoria
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

function pasarDia() {
  dia++;
  comida -= poblacion;

  if (comida < 0) {
    alert("Tu gente se ha muerto de hambre. ¡Perdiste!");
    resetearJuego();
  } else {
    comida += Math.floor(Math.random() * 5);
    document.getElementById("dia").textContent = dia;
    document.getElementById("comida").textContent = comida;

    moverCiudadanos(); // <-- se mueven cada día
  }
}

function resetearJuego() {
  dia = 1;
  comida = 10;
  poblacion = 5;
  document.getElementById("dia").textContent = dia;
  document.getElementById("comida").textContent = comida;
  crearCiudadanos(); // recrea los ciudadanos
}

// Inicializa al cargar
window.onload = () => {
  crearCiudadanos();
};
