// 📌 Importar archivos SCSS/CSS para que Webpack los procese
import "./scss/main.scss";

// 📌 Importar imágenes (opcional, si usas imágenes con Webpack)
import "./img/portatil-domestico.jpg";

// 📌 Código JavaScript del proyecto
console.log("✅ Webpack está funcionando correctamente.");

// 📌 Función de prueba para verificar que el JS se ejecuta bien
document.addEventListener("DOMContentLoaded", () => {
    const title = document.createElement("h1");
    title.textContent = "Webpack está compilando correctamente 🎉";
    document.body.appendChild(title);
});
