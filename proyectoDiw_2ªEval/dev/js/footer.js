// Datos del footer (puedes modificar estos valores según la página)
const footerData = {
  contacto: {
    titulo: "Contáctanos",
    info: [
      "Dirección: Calle Falsa 123, Ciudad",
      "Teléfono: +34 123 456 789",
      "Email: info@miaquiler.com",
    ],
  },
  redesSociales: {
    titulo: "Síguenos",
    redes: [
      {
        nombre: "Facebook",
        url: "https://facebook.com",
        icono: "fab fa-facebook-f",
      },
      {
        nombre: "Twitter",
        url: "https://twitter.com",
        icono: "fab fa-twitter",
      },
      {
        nombre: "Instagram",
        url: "https://instagram.com",
        icono: "fab fa-instagram",
      },
    ],
  },
  enlacesUtiles: {
    titulo: "Enlaces Útiles",
    links: [
      { texto: "Términos y Condiciones", url: "terminos.html" },
      { texto: "Política de Privacidad", url: "privacidad.html" },
      { texto: "Preguntas Frecuentes", url: "faq.html" },
    ],
  },
  copyright: "© 2025 MiAlquiler. Todos los derechos reservados.",
};

// Función para crear el footer dinámicamente
function crearFooter() {
  // Buscar el elemento footer existente
  let footer = document.querySelector("footer");

  // Si no existe, crearlo y añadirlo al body (aunque ya lo tienes, esto es por seguridad)
  if (!footer) {
    footer = document.createElement("footer");
    footer.classList.add("pie-pagina");
    document.body.appendChild(footer);
    console.warn(
      "No se encontró un <footer> en el HTML. Se ha creado uno nuevo."
    );
  } else {
    footer.classList.add("pie-pagina"); // Asegura que tenga la clase
    footer.innerHTML = ""; // Limpia el contenido existente
  }

  // Contenedor principal
  const contenedorPie = document.createElement("div");
  contenedorPie.classList.add("contenedor-pie");

  // Sección de contacto
  const infoContacto = document.createElement("div");
  infoContacto.classList.add("info-contacto");
  const tituloContacto = document.createElement("h3");
  tituloContacto.classList.add("titulo-pie");
  tituloContacto.textContent = footerData.contacto.titulo;
  infoContacto.appendChild(tituloContacto);
  footerData.contacto.info.forEach((info) => {
    const p = document.createElement("p");
    p.textContent = info;
    infoContacto.appendChild(p);
  });
  contenedorPie.appendChild(infoContacto);

  // Sección de redes sociales
  const redesSociales = document.createElement("div");
  redesSociales.classList.add("redes-sociales");
  const tituloRedes = document.createElement("h3");
  tituloRedes.classList.add("titulo-pie");
  tituloRedes.textContent = footerData.redesSociales.titulo;
  redesSociales.appendChild(tituloRedes);
  const listaRedes = document.createElement("ul");
  listaRedes.classList.add("lista-redes");
  footerData.redesSociales.redes.forEach((red) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("enlace-red");
    a.href = red.url;
    a.target = "_blank";
    const i = document.createElement("i");
    i.className = red.icono; // Usamos className en lugar de classList.add
    a.appendChild(i);
    a.appendChild(document.createTextNode(` ${red.nombre}`));
    li.appendChild(a);
    listaRedes.appendChild(li);
  });
  redesSociales.appendChild(listaRedes);
  contenedorPie.appendChild(redesSociales);

  // Sección de enlaces útiles
  const enlacesUtiles = document.createElement("div");
  enlacesUtiles.classList.add("enlaces-utiles");
  const tituloEnlaces = document.createElement("h3");
  tituloEnlaces.classList.add("titulo-pie");
  tituloEnlaces.textContent = footerData.enlacesUtiles.titulo;
  enlacesUtiles.appendChild(tituloEnlaces);
  const listaEnlaces = document.createElement("ul");
  listaEnlaces.classList.add("lista-enlaces");
  footerData.enlacesUtiles.links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("enlace-pie");
    a.href = link.url;
    a.textContent = link.texto;
    li.appendChild(a);
    listaEnlaces.appendChild(li);
  });
  enlacesUtiles.appendChild(listaEnlaces);
  contenedorPie.appendChild(enlacesUtiles);

  // Sección de copyright
  const pieCopyright = document.createElement("div");
  pieCopyright.classList.add("pie-copyright");
  const pCopyright = document.createElement("p");
  pCopyright.textContent = footerData.copyright;
  pieCopyright.appendChild(pCopyright);

  // Ensamblar el footer
  footer.appendChild(contenedorPie);
  footer.appendChild(pieCopyright);

  console.log("Footer insertado correctamente en <footer>.");
}

// Llamar a la función cuando la página se cargue
document.addEventListener("DOMContentLoaded", crearFooter);
