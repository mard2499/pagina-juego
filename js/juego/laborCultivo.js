// Tiempo en milisegundos que tarda en crecer el cultivo
const TIEMPO_CRECE_CULTIVO = 10000; // 10 segundos

// Sembrar una parcela vacía
function sembrarParcela() {
  const parcela = zonas.cultivo.find(p => p.estado === "vacio" && !p.ocupado);

  if (!parcela) return; // No hay parcelas disponibles

  parcela.ocupado = true;
  parcela.estado = "sembrado";
  parcela.elemento.style.backgroundColor = "#c2b965"; // color intermedio

  // Esperar el tiempo de crecimiento
  setTimeout(() => {
    parcela.estado = "listo";
    parcela.ocupado = false;
    parcela.elemento.style.backgroundColor = "#e2d354"; // color de listo para cosechar
  }, TIEMPO_CRECE_CULTIVO);
}

// Cosechar una parcela lista
function cosecharParcela() {
  const parcela = zonas.cultivo.find(p => p.estado === "listo" && !p.ocupado);

  if (!parcela) return; // No hay parcelas listas para cosechar

  parcela.ocupado = true;
  parcela.elemento.style.backgroundColor = "#8bbd61"; // color de cosecha en progreso

  // Simulamos tiempo de recolección (rápido por ahora)
  setTimeout(() => {
    parcela.estado = "vacio";
    parcela.ocupado = false;
    parcela.elemento.style.backgroundColor = "#7a9e7e"; // color original

    recursos.comida.cantidad += 10; // Ganancia al cosechar
  }, 2000);
}