

        const imagenNoche = "../Fotos_integrador/lenasnoche.webp";
        const imagenDia = "../Fotos_integrador/lasLeñas.webp"
        const imagenDia2 = "../Fotos_integrador/lenas2.jpg";
        const imagenNoche2 = "../Fotos_integrador/verticalNoche.jpg";

        function modonoche() {




            let body = document.body;

            let imagen = document.getElementById("skiando");
            let img = document.getElementById("sky")

            body.classList.toggle("modonoche");


            if (body.classList.contains("modonoche")) {
                imagen.src = imagenNoche;
                img.src = imagenNoche2;


            } else {
                imagen.src = imagenDia;
                img.src = imagenDia2


            }


        }