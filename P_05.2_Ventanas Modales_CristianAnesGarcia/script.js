document.addEventListener("DOMContentLoaded", () => {
    const modalInformativa = document.getElementById("modalInformativa");
    const modalConfirmacion = document.getElementById("modalConfirmacion");
    const modalFormulario = document.getElementById("modalFormulario");

    // Botones para abrir modales
    document.getElementById("abrirModalInformativa").onclick = () => modalInformativa.style.display = "flex";
    document.getElementById("abrirModalConfirmacion").onclick = () => modalConfirmacion.style.display = "flex";
    document.getElementById("abrirModalFormulario").onclick = () => modalFormulario.style.display = "flex";

    // Cerrar modales
    document.querySelectorAll(".cerrar").forEach(botonCerrar => {
        botonCerrar.onclick = () => {
            botonCerrar.parentElement.parentElement.style.display = "none";
        };
    });

    //boton de cerrar el modal informativo
    document.getElementById("cerrarModalInformativa").onclick = () => {
        modalInformativa.style.display = "none";
    }

    // Botones en modal Confirmación
    document.getElementById("botonCancelar").onclick = () => {
        alert("Has pulsado: Cancelar");
        modalConfirmacion.style.display = "none";
    };
    document.getElementById("botonContinuar").onclick = () => {
        alert("Has pulsado: Continuar");
        modalConfirmacion.style.display = "none";
    };

    // Enviar formulario
    document.getElementById("formulario").onsubmit = (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const contrasena = document.getElementById("contrasena").value;
        const confirmarContrasena = document.getElementById("confirmarContrasena").value;

        alert(`Nombre: ${nombre}\nContraseñas coinciden: ${contrasena === confirmarContrasena}`);
        modalFormulario.style.display = "none";
    };

    // Cerrar modal al hacer clic fuera de su contenido
    document.querySelectorAll(".modal").forEach(modal => {
        modal.onclick = (e) => {
            if (e.target === modal) modal.style.display = "none";
        };
    });
});
