function mostrarTexto(idParrafo) {
    const parrafo = document.getElementById(idParrafo);
    parrafo.classList.toggle('visible')
    parrafo.scrollIntoView({ behavior: "smooth", block: "start" });

}