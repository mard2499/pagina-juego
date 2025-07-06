// js/main.js

// Inicia el juego cuando todo el DOM ha cargado
document.addEventListener("DOMContentLoaded", () => {
  configurarClicksHUD();      // HUD
  configurarPanelRoles();     // Roles
  roles.libres = Math.floor(recursos.poblacion.cantidad);
  actualizarPanelRoles();
  crearCiudadanos();          // Ciudadanos
  iniciarMotorJuego();        // Motor
});

// Bucle del juego: se actualiza cada segundo
setInterval(() => {
  actualizarHUD();
  moverCiudadanos();
  if (recursoSeleccionado) mostrarInfoRecurso(recursoSeleccionado);
}, 1000);