// js/juego/motor.js

/**
 * Inicia la lógica del juego con intervalos constantes.
 */
function iniciarMotorJuego() {
  setInterval(() => {
    procesarRecursos();
    actualizarHUD();
    moverCiudadanos();

    // Si hay un recurso seleccionado, actualiza su panel
    if (recursoSeleccionado) {
      mostrarInfoRecurso(recursoSeleccionado);
    }
  }, 1000); // 1000ms = 1 segundo
}

/**
 * Lógica principal que calcula producción y consumo, y actualiza recursos.
 */
function procesarRecursos() {
  // 🔄 Limpia producción y consumo
  for (const tipo in recursos) {
    if (recursos[tipo].produccion !== undefined) recursos[tipo].produccion = 0;
    if (recursos[tipo].consumo !== undefined) recursos[tipo].consumo = 0;
  }

  // 📈 Producción según roles
  recursos.comida.produccion += roles.agricultores * 2;
  recursos.madera.produccion += roles.leñadores * 2;
  recursos.hierro.produccion += roles.mineros * 1;

  // 📉 Consumo base (comida por persona)
  const poblacion = Math.floor(recursos.poblacion.cantidad);
  recursos.comida.consumo += poblacion * 1;

  // ✅ Aplica producción y consumo
  for (const tipo in recursos) {
    const r = recursos[tipo];
    if (r.produccion !== undefined && r.consumo !== undefined) {
      r.cantidad += r.produccion - r.consumo;
      if (r.cantidad < 0) r.cantidad = 0;
    }
  }
}