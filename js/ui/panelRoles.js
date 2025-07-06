// js/ui/panelRoles.js

/**
 * Muestra u oculta el panel de roles al hacer clic en la barra de población.
 */
function configurarPanelRoles() {
  const barraPoblacion = document.getElementById("poblacion-barra");
  barraPoblacion.addEventListener("click", () => {
    const panel = document.getElementById("panel-roles");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
    actualizarPanelRoles();
  });
}

/**
 * Actualiza el contenido del panel de roles con los valores actuales.
 */
function actualizarPanelRoles() {
  const panel = document.getElementById("panel-roles");
  panel.innerHTML = "<h3>Asignar Ciudadanos</h3>";

  for (const rol in roles) {
    const cantidad = roles[rol];

    const fila = document.createElement("div");
    fila.classList.add("rol");

    const nombre = document.createElement("span");
    nombre.textContent = `${rol.charAt(0).toUpperCase() + rol.slice(1)}: ${cantidad}`;

    const boton = document.createElement("button");
    boton.textContent = "+";
    boton.disabled = (rol === "libres") || (roles.libres <= 0); // No asignar más si no hay libres

    boton.addEventListener("click", () => {
      if (roles.libres > 0) {
        roles.libres--;
        roles[rol]++;
        actualizarPanelRoles();
      }
    });

    fila.appendChild(nombre);
    fila.appendChild(boton);
    panel.appendChild(fila);
  }
}