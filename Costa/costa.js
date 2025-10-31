function mostrarOcultar(id) {
    const contenido = document.getElementById(id);
    contenido.classList.toggle('activo')
    if (contenido.classList.contains('activo')) {
        contenido.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}