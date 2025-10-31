function validarForm() {

    let bandera = true;


    const form = document.forms["formu"];

    const nombre = form["nombre"];
    const apellido = form["apellido"];
    const correo = form["correo"];
    const mensaje = form["mensaje"];


    nombre.style.border = "";
    apellido.style.border = "";
    correo.style.border = "";
    mensaje.style.border = "";



    if (nombre.value === "") {
        comprobando(nombre, "error");
        bandera = false;
    } else {
        let variable = document.getElementById("error").style.display = 'none';
    }



    if (apellido.value === '') {
        comprobando(apellido, "error2");
        bandera = false;
    } else {
        let variable = document.getElementById("error2").style.display = 'none';
    }



    let valor = document.getElementById("error3");

    if (correo.value.trim() === "") {

        bandera = false;

        valor.style.display = "flex";
        valor.style.color = "red";
        valor.innerHTML = "Debe completar el campo"
        correo.style.border = "1px solid red";



    } else if (!validarFormatoEmail(correo.value)) {


        bandera = false;
        valor.style.display = "flex";
        valor.style.color = "red";
        correo.style.border = "1px solid red";
        valor.innerHTML = "Ingrese un formato válido, ejemplo@gmail.com"


    } else {
        valor.style.display = "none";

    }

    let mens = document.getElementById("error4")

    if (mensaje.value.trim() === "") {
        bandera = false;

        mensaje.style.border = "1px solid red";
        mens.style.display = "flex";
        mens.style.color = "red";
        mens.innerHTML = "Dejanos tu mensaje";



    }

    if (bandera == true) {
        mostrarDatos();
    }


    return false;

}



function validarFormatoEmail(email) {
    const formato = /^[a-zA-Z0-9._-]+@(gmail|hotmail|yahoo)(\.com|.edu|.ar){1,2}$/;
    return formato.test(email);

}


function comprobando(campo, x) {


    if (campo.value.trim() === "") {
        campo.style.border = "red 1px solid";
        let parrafo = document.getElementById(x);

        parrafo.style.display = "flex";
        parrafo.style.color = "red";
        parrafo.innerHTML = "Debe completar el campo";

    }

}

function mostrarDatos() {


    const form = document.forms["formu"];
    const nombre = form["nombre"].value;



    let contenedor = document.createElement('div');
    contenedor.classList.add("contenedorDatos")

    let parrafo = document.createElement('p');
    parrafo.innerHTML = nombre + " tu formulario fue enviado con exito";

    contenedor.appendChild(parrafo)
    const contenedorFormulario = document.getElementById("contenedorForm")

    const contForm = document.getElementById("contenedorDatos")
    //contForm.insertAdjacentElement("afterend", contenedor)
    contForm.append(contenedor);
    contenedorFormulario.style.display = "none";

    contenedor.scrollIntoView({ behavior: "smooth", block: "start" });

    return false;


}