let imagenes = [
    "Fotos_integrador/bariloInicio.jpg",
    "Fotos_integrador/verano-en-bariloche.jpg",
    "Fotos_integrador/dique_potrerillos.jpg",
    "Fotos_integrador/lasLeñas.webp"
]

let index = 0;

mostrarDiapositivas(index);

// controles ant/next
function avanzar(n) {
    mostrarDiapositivas(index += n);
}

function mostrarDiapositivas(n) {

    if (n >= imagenes.length) index = 0;

    if (n < 1) { index = imagenes.length - 1 }

    var foto = document.getElementById("fotos");
    foto.src = imagenes[index];

}



