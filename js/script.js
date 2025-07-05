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
    comida += Math.floor(Math.random() * 5); // recolecta aleatoria
    document.getElementById("dia").textContent = dia;
    document.getElementById("comida").textContent = comida;
  }
}

function resetearJuego() {
  dia = 1;
  comida = 10;
  poblacion = 5;
  document.getElementById("dia").textContent = dia;
  document.getElementById("comida").textContent = comida;
}