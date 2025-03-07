document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <nav class="nav">
      <div class="nav__logo">MiAlquiler</div>
      <button class="nav__toggle" id="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav__menu">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="propiedades.html">Propiedades</a></li>
        <li><a href="como-funciona.html">Cómo Funciona</a></li>
        <li class="nav__submenu">
          <a href="#">Cuenta ▼</a>
          <ul>
            <li><a href="login.html">Iniciar sesión</a></li>
            <li><a href="registro.html">Registrarse</a></li>
          </ul>
        </li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  `;

  // Insertamos el menú en el `<header>`
  document.querySelector("header").innerHTML = menuHTML;

  // Funcionalidad del botón hamburguesa
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.querySelector(".nav__menu");

  toggleButton.addEventListener("click", () => {
    console.log("Botón clickeado");
    document.querySelector(".nav__menu").classList.toggle("active");
  });

  console.log(document.getElementById("menu-toggle"));
});
