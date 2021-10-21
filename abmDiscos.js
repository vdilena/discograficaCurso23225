// Clase de Cantante
class Cantante {

    constructor(nuevoCantante){

        this.id = nuevoCantante.id;
        this.cantanteOBanda = nuevoCantante.cantanteOBanda;
        this.edad = nuevoCantante.edad;
        this.anioInicioCarrera = nuevoCantante.anioInicioCarrera;
        this.anioFinCarrera = nuevoCantante.anioFinCarrera;
        this.cantidadPremiosrecibidos = nuevoCantante.cantidadPremiosrecibidos;
    }
}

// Obtener datos de cantantes (despues de clase 14: AJAX con Jquery)
const cantantes = [
    new Cantante({id: 1, cantanteOBanda : "The Rollings Stones", edad: 50, anioInicioCarrera: 1950, anioFinCarrera: null, cantidadPremiosrecibidos: 80}),
    new Cantante({id: 2, cantanteOBanda : "The Beatles", edad: 40, anioInicioCarrera: 1960, anioFinCarrera: null, cantidadPremiosrecibidos: 100}),
    new Cantante({id: 3, cantanteOBanda : "Queen", edad: 35, anioInicioCarrera: 1960, anioFinCarrera: null, cantidadPremiosrecibidos: 120}),
];

function agregarCantantes() {

    const selectCantantes = document.getElementById("cantanteBanda");

    for(const cantante of cantantes) {

        const opcionCantante = document.createElement("option");
        opcionCantante.value = cantante.id;
        opcionCantante.innerHTML = cantante.cantanteOBanda;

        selectCantantes.appendChild(opcionCantante);
    }
}

agregarCantantes();

// Funciones para validacion de datos a guardar
function datosValidos(nombre, anio, bandaCantante) {

    let sonValidos = false;

    if (nombre != "" && esPositivoEntero(anio) && bandaCantante != "") {
        sonValidos = true;
    }

    return sonValidos;
}

function esPositivoEntero(numero) {

    let resultado = false;

    if(numero > 0 && Number.isInteger(numero)){
        resultado = true;
    }

    return resultado;
}

// Funciones para guardar disco
function obtenerDiscosDeStorage() {

    let discosEnStorage = JSON.parse(localStorage.getItem("discos"));

    if(!discosEnStorage) {
        discosEnStorage = [];
        localStorage.setItem("discos", JSON.stringify(discosEnStorage));
    }

    return discosEnStorage;
}

function guardarDiscoEnStorage(disco) {

    const discosEnStorage = obtenerDiscosDeStorage();
    discosEnStorage.push(disco);
    localStorage.setItem("discos", JSON.stringify(discosEnStorage));
}


document.getElementById("formDisco").addEventListener("submit", (event) => {

    event.preventDefault();

    const nombreDisco = document.getElementById("nombreDisco").value;
    const anioLanzamiento = Number(document.getElementById("anioLanzamiento").value);
    const cantanteBanda = cantantes.find(cantante => cantante.id == document.getElementById("cantanteBanda").value).cantanteOBanda ;
    const fotoDisco = document.getElementById("fotoDisco").value;
    const generoDisco = document.getElementById("generoDisco").value;

    if(datosValidos(nombreDisco, anioLanzamiento, cantanteBanda)) {

        const nuevoDisco = new Disco(nombreDisco, anioLanzamiento, cantanteBanda, generoDisco, fotoDisco, []);
        guardarDiscoEnStorage(nuevoDisco);
    }
});