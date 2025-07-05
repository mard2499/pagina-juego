let dia = 1;
let comida = 10;
let poblacion = 5;



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