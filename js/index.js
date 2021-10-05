/**
 * Un switch para elegir una opcion: 
    1_ Cargar disco
    2_ Cargar cancion
    2_ Ver discos
    3_ Ver detalle disco
**/

// Funcion para cargar disco (con las validaciones correspondientes)

// Funcion para cargar cancion (con las validaciones correspondientes)

// Clase Disco (con metodo de mostrar resumen disco)

// Clase Cancion (con metodo mostrar cancion con orden y duracion en minutos)

// Funcion mostrar disco, donde recorremos un disco harcodeado y lo agregamos con document.write

// Funcion mostrar detalle disco, donde simulamos lo que va a mostrar el modal con un document.write

class Disco {

    constructor(nombre, anio, bandaCantante, genero, canciones) {
        
        this.nombre = nombre;
        this.anio = anio;
        this.bandaCantante = bandaCantante;
        this.genero = genero;
        this.canciones = canciones;
    }

    verDatosResumen() {

        document.write("<ul>");
        document.write("<li>Nombre: " + this.nombre + "</li>");
        document.write("<li>Año lanzamiento: " + this.anio + "</li>");
        document.write("<li>Cantante o banda: " + this.bandaCantante + "</li>");
        document.write("<li>Genero: " + this.genero + "</li>");
        document.write("</ul>");

        document.write("----------------------<br>");
    }

    verCanciones() {
        // Voy a tener que hacer un for para mostrar la lista de canciones
    }
}

class Cancion {

    constructor(nombre, duracion, orden) {

        this.nombre = nombre;
        this.duracion = duracion;
        this.orden = orden;
    }

    ver() {
        document.write(this.orden + ". " + this.nombre + " <strong>(" + this.duracion + ")</strong>");
    }
}

function datosValidos (nombre, anio, bandaCantante) {

    let sonValidos = false;

    if(nombre != "" && !isNaN(anio) && bandaCantante != "") {
        sonValidos = true;
    }

    return sonValidos;
}

function datosValidosCancion(nombre, duracion, orden){

    let sonValidos = false;

    if(nombre != "" && !isNaN(duracion) && !isNaN(orden)) {
        sonValidos = true;
    }

    return true;
}

function cargarDisco() {

    let nombreDisco = prompt("Ingrese nombre disco");
    let anioLanzamiento = parseInt(prompt("Ingrese año lanzamiento"));
    let nombreBandaOCantante = prompt("Ingrese nombre de banda o cantante");
    let genero = prompt("Ingrese el genero del disco");

    const SON_DATOS_VALIDOS = datosValidos(nombreDisco, anioLanzamiento, nombreBandaOCantante);

    let nuevoDisco = null;
    if(SON_DATOS_VALIDOS) {
        nuevoDisco  = new Disco(nombreDisco, anioLanzamiento, nombreBandaOCantante, genero);
    }

    return nuevoDisco;
}

function cargarCancion() {

    let nombreCancion = prompt("Ingrese nombre cancion");
    let duracion = Number(prompt("Ingrese duracion de la cancion"));
    let orden = parseInt(prompt("Ingrese orden que va a tener en el disco"));

    const SON_DATOS_VALIDOS = datosValidosCancion(nombreCancion, duracion, orden);

    let nuevaCancion = null;
    if(SON_DATOS_VALIDOS) {
        nuevaCancion = new Cancion(nombreCancion, duracion, orden);
    }

    return nuevaCancion;
}

function verCancion(){

    const CANCION = new Cancion(nombreCancion, duracion, orden);
}


let discoCargado = cargarDisco();
let cancionCargada = cargarCancion();
discoCargado.verDatosResumen();
cancionCargada.ver();

/*let opcion = prompt("Elegir opcion a procesar: DISCO, CANCION, VER_DISCO, VER_DETALLE");

switch (opcion) {

    case "DISCO":
        cargarDisco();
        break;
    case "CANCION":
        cargarCancion();
        break;
    case "VER_DISCO":
        verCancion();
        break;
    case "VER_DETALLE":
        verDetalle();
        break;
    default:
        break;
}*/