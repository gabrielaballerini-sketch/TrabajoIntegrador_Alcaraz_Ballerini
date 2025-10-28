

let index = 1;
mostrarDiapositivas(index);

// controles ant/next
function avanzar(n) {
    mostrarDiapositivas(index += n);
}

function mostrarDiapositivas(n) {
    let i;
    let diapositivas = document.getElementsByClassName("diapositiva");

    if (n > diapositivas.length) { index = 1 }
    if (n < 1) { index = diapositivas.length }
    for (i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }
    diapositivas[index - 1].style.display = "block";
}