let recursoSeleccionado = null;

function inicializarJuego() {
  crearCiudadanos();
}


function actualizarJuego() {
  // Simular producción y consumo
  console.log(recursoSeleccionado)
  for (let tipo in recursos) {
    const r = recursos[tipo];
    r.cantidad += r.produccion;
    r.cantidad -= r.consumo;
    if (r.cantidad < 0) r.cantidad = 0;

    // Actualiza el valor en pantalla
    const span = document.getElementById(`valor-${tipo}`);
    if (span) span.textContent = Math.floor(r.cantidad);
  }

  // Puedes mover ciudadanos aquí si quieres
  moverCiudadanos();

  // Puedes mover ciudadanos aquí si quieres
    if (recursoSeleccionado) {
      mostrarInfoRecurso(recursoSeleccionado);
    }



}