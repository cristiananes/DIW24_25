// Abrir el modal de registro
function abrirRegistroModal() {
  const modal = document.getElementById("modal-registro");
  if (!modal) {
    console.error("No se encontró el contenedor #modal-registro");
    return;
  }

  modal.classList.add("active");
  modal.innerHTML = `
    <div class="modal-contenido">
      <span class="cerrar-modal">×</span>
      <h3>Regístrate</h3>
      <form id="form-registro">
        <div class="form-grupo">
          <label for="nombre-registro">Nombre:</label>
          <input type="text" id="nombre-registro" name="nombre" required>
          <span class="error" id="error-nombre"></span>
        </div>
        <div class="form-grupo">
          <label for="email-registro">Correo:</label>
          <input type="email" id="email-registro" name="email" required>
          <span class="error" id="error-email"></span>
        </div>
        <div class="form-grupo">
          <label for="contrasena-registro">Contraseña:</label>
          <input type="password" id="contrasena-registro" name="contrasena" required>
          <span class="error" id="error-contrasena"></span>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  `;

  asignarEventosModal();
}

// Cerrar el modal
function cerrarModal() {
  const modal = document.getElementById("modal-registro");
  if (modal) {
    modal.classList.remove("active");
    modal.innerHTML = "";
  }
}

// Asignar eventos al modal
function asignarEventosModal() {
  const modal = document.getElementById("modal-registro");
  const form = document.getElementById("form-registro");
  const cerrarBtn = document.querySelector(".cerrar-modal");

  if (cerrarBtn) {
    cerrarBtn.addEventListener("click", cerrarModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        cerrarModal();
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validarFormularioRegistro()) {
        alert("Registro exitoso");
        cerrarModal();
      }
    });
  }
}

// Validaciones del formulario de registro
function validarFormularioRegistro() {
  let isValid = true;
  const nombre = document.getElementById("nombre-registro").value.trim();
  const email = document.getElementById("email-registro").value.trim();
  const contrasena = document
    .getElementById("contrasena-registro")
    .value.trim();

  // Validar nombre
  const errorNombre = document.getElementById("error-nombre");
  if (nombre.length < 3) {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
    isValid = false;
  } else {
    errorNombre.textContent = "";
  }

  // Validar email
  const errorEmail = document.getElementById("error-email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEmail.textContent = "Ingresa un correo válido";
    isValid = false;
  } else {
    errorEmail.textContent = "";
  }

  // Validar contraseña
  const errorContrasena = document.getElementById("error-contrasena");
  if (contrasena.length < 6) {
    errorContrasena.textContent =
      "La contraseña debe tener al menos 6 caracteres";
    isValid = false;
  } else {
    errorContrasena.textContent = "";
  }

  return isValid;
}

// Manejar el formulario de inicio de sesión
function manejarInicioSesion() {
  const form = document.getElementById("form-inicio-sesion");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const contrasena = document.getElementById("contrasena").value.trim();

      if (email && contrasena) {
        alert("Inicio de sesión exitoso");
      } else {
        alert("Por favor, completa todos los campos");
      }
    });
  }
}

// Asignar evento para abrir el modal
document.addEventListener("DOMContentLoaded", () => {
  const abrirModalLink = document.getElementById("abrir-registro-modal");
  if (abrirModalLink) {
    abrirModalLink.addEventListener("click", (e) => {
      e.preventDefault();
      abrirRegistroModal();
    });
  }

  manejarInicioSesion();
});
