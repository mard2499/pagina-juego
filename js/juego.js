let dia = 1;
let comida = 10;
let poblacion = 5;

function pasarDia() {
  dia++;
  comida -= poblacion;

  if (comida < 0) {
    alert("Tu gente se ha muerto de hambre. ¡Perdiste!");
    resetearJuego();
  } else {
    comida += obtenerComidaAleatoria();
    actualizarInterfaz();
    moverCiudadanos();
  }
}

function resetearJuego() {
  dia = 1;
  comida = 10;
  poblacion = 5;
  actualizarInterfaz();
  crearCiudadanos();
}

function inicializarJuego() {
  actualizarInterfaz();
}

function actualizarInterfaz() {
  document.getElementById("dia").textContent = dia;
  document.getElementById("comida").textContent = comida;
}