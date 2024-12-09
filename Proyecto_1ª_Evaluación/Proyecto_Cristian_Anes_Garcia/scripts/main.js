//boton de hamburguesa que abre y el menu
function toggleMenu() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("open");
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
      setTimeout(escribirTexto, 100); // Velocidad de escritura
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
