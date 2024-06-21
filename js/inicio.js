// mensaje de bienvenida
alert("¡Bienvenido a la página de DISER!")


// CAMBIAR EL TAMAÑO DE LAS IMÁGENES
// creamos la variable imagenes cogiendo el id que le hemos puesto en el index, que creará un array con las imágenes
let imagenes = document.querySelectorAll("#img-container");
//recorremos el array con bucle for
for (let i = 0; i < imagenes.length; i++) {
    // añadimos un evento para cuando pases por encima, cambie el tamaño
    imagenes[i].addEventListener("mouseover", function () {
        imagenes[i].style.width = "550px";
    })
    // para que vuelva al tamaño original
    imagenes[i].addEventListener("mouseout", function () {
        imagenes[i].style.width = "500px";
    })
}