//boton de hamburguesa que abre y el menu
function toggleMenu() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("open");
}

//funcion para mostrar diplomas
function toggleDiploma(id) {
  const img = document.getElementById(id);
  img.style.display = img.style.display === "none" ? "block" : "none";
}

//bienvenida
document.addEventListener("DOMContentLoaded", () => {
  const mensaje = "¡Bienvenido a mi Portafolio!";
  const elemento = document.getElementById("bienvenida");
  let indice = 0;

  function escribirTexto() {
    if (indice < mensaje.length) {
      elemento.textContent += mensaje[indice];
      indice++;
      // Velocidad de escritura
      setTimeout(escribirTexto, 100);
    }
  }

  escribirTexto();
});

//Funcion para titulo de proyectos
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("#proyectos h2");
  setInterval(() => {
    // Alterna cada 1 segundo
    titulo.style.visibility =
      titulo.style.visibility === "hidden" ? "visible" : "hidden";
  }, 1000);
});

// Generar el contenido del navegador
function generarNavegador() {
  const header = document.querySelector("header");
  // Asegúrate de que exista un header en la página
  if (!header) return;

  header.innerHTML = `
    <nav id="main-nav">
      <h3>Cristian Anes García</h3>
      <img src="../img/IMG_7276-min.jpg" alt="Foto de Cristian Anes" />
      <button id="hamburger" onclick="toggleMenu()">☰</button>
      <ul>
        <li><button id="boton-modo-oscuro">Alternar Modo Oscuro</button></li>
        <li><a href="../index.html#inicio">Inicio</a></li>
        <li><a href="../index.html#sobre-mi">Sobre mí</a></li>
        <li>
          <a class="seDespliega">Proyectos ></a>
          <ul class="desplegable">
            <li><a href="../pages/consultasMedicas.html">Consultas Médicas</a></li>
            <li><a href="../pages/proyectos.html#quiz">Quiz</a></li>
            <li><a href="../pages/proyectos.html#camisetas">Camisetas Lenguajes</a></li>
            <li><a href="../pages/proyectos.html#diario">Diario de Viajes</a></li>
          </ul>
        </li>
        <li>
          <a class="seDespliega">Datos de interés ></a>
          <ul class="desplegable">
            <li><a href="../pages/DatosInteres.html#formacion">Formación</a></li>
            <li><a href="../pages/DatosInteres.html#experiencia">Experiencia</a></li>
            <li><a href="../pages/DatosInteres.html#diplomas">Diplomas</a></li>
            <li><a href="../pages/DatosInteres.html#disponibilidad">Disponibilidad</a></li>
          </ul>
        </li>
        <li><a href="../pages/contacto.html">Contacto</a></li>
      </ul>
    </nav>
  `;
}

// Generar el contenido del footer
function generarFooter() {
  const footer = document.createElement("footer");
  footer.id = "footer";

  footer.innerHTML = `
    <div class="footer-contenido">
      <p>© 2024 Cristian Anes García</p>
      <div class="footer-enlaces">
        <a
          href="https://github.com/cristiananes"
          target="_blank"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-anes-garc%C3%ADa-664a94233/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="contacto.html" class="footer-contacto">Contacto</a>
      </div>
    </div>
  `;

  document.body.appendChild(footer); // Añade el footer al final del body
}

// Llama a la función cuando se cargue la página
document.addEventListener("DOMContentLoaded", generarFooter);

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", generarNavegador);

//submenus con js en vez de con hover que son mas efectivos
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los enlaces que despliegan submenús
  const desplegables = document.querySelectorAll(".seDespliega");

  desplegables.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      // Evita la navegación del enlace
      e.preventDefault();

      // Encuentra el siguiente elemento UL (el submenú)
      const submenu = enlace.nextElementSibling;

      // Cierra cualquier submenú abierto excepto el actual
      document.querySelectorAll("ul.desplegable").forEach((menu) => {
        if (menu !== submenu) {
          menu.classList.remove("open");
        }
      });

      // Alterna el estado del submenú actual
      submenu.classList.toggle("open");
    });
  });
});

//Modo oscuro
document.addEventListener("DOMContentLoaded", () => {
  const botonModoOscuro = document.getElementById("boton-modo-oscuro");

  // Comprobar si el usuario tiene preferencia de modo oscuro
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("modo-oscuro");
  }

  // Alternar el modo oscuro manualmente
  botonModoOscuro.addEventListener("click", () => {
    document.documentElement.classList.toggle("modo-oscuro");

    // Guardar la preferencia del usuario en localStorage
    const esModoOscuro =
      document.documentElement.classList.contains("modo-oscuro");
    localStorage.setItem("modo-oscuro", esModoOscuro);
  });

  // Restaurar el modo oscuro según la preferencia guardada
  const modoGuardado = localStorage.getItem("modo-oscuro");
  if (modoGuardado === "true") {
    document.documentElement.classList.add("modo-oscuro");
  }
});
