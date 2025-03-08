// Datos de ejemplo para resultados de búsqueda
const resultadosBusqueda = document.getElementById("resultados-busqueda");
const propiedades = [
  {
    imagen:
      "https://casasinhaus.com/wp-content/uploads/2022/05/casas-lujo-madrid-inhaus-2.jpg",
    titulo: "Casa en Madrid",
    precio: "$1200/mes",
    descripcion: "3 habitaciones 🛏️ 2 baños 🛁",
  },
  {
    imagen: "https://www.enjoybcn.com/img/apartments/1/13/1.jpg",
    titulo: "Apartamento en Barcelona",
    precio: "$900/mes",
    descripcion: "2 habitaciones 🛏️ 1 baño 🛁",
  },
];

// Inyectar resultados de búsqueda
function cargarResultados() {
  if (!resultadosBusqueda) {
    console.error("No se encontró el contenedor #resultados-busqueda");
    return;
  }

  resultadosBusqueda.innerHTML = ""; // Limpiar contenido previo
  propiedades.forEach((prop) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "property-card";
    tarjeta.innerHTML = `
      <img src="${prop.imagen}" alt="${prop.titulo}">
      <div class="property-card-body">
        <h3>${prop.titulo}</h3>
        <p class="property-price">${prop.precio}</p>
        <p class="property-description">${prop.descripcion}</p>
        <a href="#" class="abrir-modal-link">Más información</a>
      </div>
    `;
    resultadosBusqueda.appendChild(tarjeta);
  });

  // Asignar eventos a los enlaces "Más información"
  document.querySelectorAll(".abrir-modal-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      abrirModal();
    });
  });
}

// Función para abrir el modal
function abrirModal() {
  const modal = document.getElementById("modal-contacto");
  if (!modal) {
    console.error("No se encontró el contenedor #modal-contacto");
    return;
  }

  modal.classList.add("active");
  modal.innerHTML = `
    <div class="modal-contenido">
      <span class="cerrar-modal">×</span>
      <h3>Contacto</h3>
      <form id="form-contacto">
        <div class="form-grupo">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required>
        </div>
        <div class="form-grupo">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-grupo">
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  `;

  // Asignar eventos al modal después de crearlo
  asignarEventosModal();
}

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById("modal-contacto");
  if (modal) {
    modal.classList.remove("active");
    modal.innerHTML = ""; // Limpiar contenido
  }
}

// Asignar eventos al modal
function asignarEventosModal() {
  const modal = document.getElementById("modal-contacto");
  const form = document.getElementById("form-contacto");
  const cerrarBtn = document.querySelector(".cerrar-modal");

  // Cerrar al hacer clic en el botón de cierre
  if (cerrarBtn) {
    cerrarBtn.addEventListener("click", cerrarModal);
  }

  // Cerrar al hacer clic fuera del modal
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        cerrarModal();
      }
    });
  }

  // Manejar el envío del formulario
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensaje enviado con éxito");
      cerrarModal();
    });
  }
}

// Cargar resultados al cargar la página
document.addEventListener("DOMContentLoaded", cargarResultados);
