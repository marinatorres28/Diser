//  DESPLEGABLE
// primero creamos un mapa con los datos de la tabla y sus valores
let mapa = new Map([["Nevera", "entre 0,250 - 0,350 kW"],
["Vitrocerámica", "entre 0,900 - 2,000 kW"], ["Microondas", "entre 0,900 - 1,500 kW"],
["Horno", "entre 1,200 - 2,200 kW"], ["Lavavajillas", "entre 1,500 - 2,200 kW"],
["Lavadora", "entre 1,500 - 2,200 kW"], ["Televisión", "entre 0,150 - 0,400 kW"],
["Aire acondicionado", "entre 0,900 - 2,000 kW"], ["Calefacción", "entre 1,000 - 2,500 kW"]]);

// leemos el select que hemos creado en el index con el id
let select = document.querySelector("#eficiencia");
// recorremos el mapa con bucle for of
for (let [electrodomestico, consumo] of mapa) {
    // creamos la opcion para seleccionar
    let electrodomesticoOpcion = document.createElement("option");
    // establecemos el nombre de la opcion
    electrodomesticoOpcion.textContent = electrodomestico;
    // hacemos un id para las opciones del desplegable
    electrodomesticoOpcion.setAttribute("id", electrodomestico);
    // y creamos los hijos con los electrodomesticos guardados dentro de la variable
    select.appendChild(electrodomesticoOpcion);
}

// creamos un evento para que cuando cambie la selección, aparezca el consumo del electrodomestico
select.addEventListener("change", function () {
    // creamos la varibale consumo y con get cogemos el valor del mapa
    let consumo = mapa.get(select.value);
    // actualizamos el contenido del elemento para mostrarlo (con el id del párrafo que creamos en el index)
    document.querySelector("#consumo").textContent = consumo;
})



