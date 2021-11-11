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

    constructor(nombre, anio, bandaCantante, genero, canciones, foto) {

        this.nombre = nombre;
        this.anio = anio;
        this.bandaCantante = bandaCantante;
        this.genero = genero;
        this.canciones = canciones;
        this.foto = foto;
    }

    verDatosResumen() {

       return `
       <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.nombre}</h5>
                <h4>${this.bandaCantante}</h4>
                <img height="200px" width="200px" src="${this.foto}" alt="${this.nombre}">
                <button class="btn btn-primary btnVerDisco" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">Ver disco</button>
                <button class="btn btn-success btnFavorito">Favorito</button>
            </div>
        </div>
       `;
    }

    verCanciones() {

        for (const cancion of this.canciones) {

            document.write("<ul>");
            document.write("<li>" + cancion.ver() + "</li>");
            document.write("</ul>");
        }
    }
}

class Cancion {

    constructor(nombre, duracion, orden) {

        this.nombre = nombre;
        this.duracion = duracion;
        this.orden = orden;
    }

    ver() {
        return this.orden + ". " + this.nombre + " <strong>(" + this.duracion + ")</strong>";
    }
}

function datosValidos(nombre, anio, bandaCantante) {

    let sonValidos = false;

    if (nombre != "" && !isNaN(anio) && bandaCantante != "") {
        sonValidos = true;
    }

    return sonValidos;
}

function datosValidosCancion(nombre, duracion, orden) {

    let sonValidos = false;

    if (nombre != "" && !isNaN(duracion) && !isNaN(orden)) {
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
    if (SON_DATOS_VALIDOS) {

        const canciones = [];
        nuevoDisco = new Disco(nombreDisco, anioLanzamiento, nombreBandaOCantante, genero, canciones);
    }

    return nuevoDisco;
}

function cargarCancion() {

    let nombreCancion = prompt("Ingrese nombre cancion");
    let duracion = Number(prompt("Ingrese duracion de la cancion"));
    let orden = parseInt(prompt("Ingrese orden que va a tener en el disco"));

    const SON_DATOS_VALIDOS = datosValidosCancion(nombreCancion, duracion, orden);

    let nuevaCancion = null;
    if (SON_DATOS_VALIDOS) {
        nuevaCancion = new Cancion(nombreCancion, duracion, orden);
    }

    return nuevaCancion;
}

function verCancion() {

    const CANCION = new Cancion(nombreCancion, duracion, orden);
}

function devolverDiscosBuscados(datoFiltro, discos) {


    const discosEncontrados = discos.filter(disco => disco.nombre.includes(datoFiltro) || disco.bandaCantante.includes(datoFiltro));

    return discosEncontrados;
}

function devolverFavorito(nombreDiscoFavorito, discos) {
    return discos.find(disco => disco.nombre == nombreDiscoFavorito);
}

function obtenerImagenParaMostrar(imagenStorage) {

    var dataImage = "data:image/png;base64," + imagenStorage;
    return dataImage;
}

const discos = [];

/*let terminarDeCargarDiscos = "";

do {

    let discoCargado = cargarDisco();

    let cancionCargada = null;
    let terminarDeCargar = "";
    do {

        cancionCargada = cargarCancion();

        discoCargado.canciones.push(cancionCargada);
        terminarDeCargar = prompt("Seguir cargando canciones? Para finalizar FIN");

    } while (terminarDeCargar.toUpperCase() != "FIN");

    discos.push(discoCargado);
    terminarDeCargarDiscos = prompt("Seguir cargando discos? Para finalizar FIN");

} while (terminarDeCargarDiscos.toUpperCase() != "FIN");


for (const disco of discos) {
    disco.verDatosResumen();
}

let discoBuscado = prompt("ingrese nombre de disco o banda/cantante");
let discoEncontrado = devolverDiscosBuscados(discoBuscado, discos);
console.log(discoEncontrado);

let discoFavorito = prompt("ingrese el nombre del disco favorito");
const favoritos = [];

let favorita = devolverFavorito(discoFavorito, discos);
if (favorita) {
    favoritos.push(favorita);
}

console.log(favoritos);*/

/**
 *  _ Implementar metodo Disco.verCanciones()
    _ Agregar varios discos y varias canciones asociadas a los discos en un array.
    _ Armar la funcionalidad de buscar disco (busqueda en array)
    _ Seleccionar discos como favoritos y agregarlos al array de favoritos
 */

// Primero vaciamos la lista harcodeada de cards
$("#cardList").html("");

// Accedemos a la lista de discos en storage
const listaDiscos = JSON.parse(localStorage.getItem("discos"));

// Recorremos la lista, y vamos cargando las cards
for (const disco of listaDiscos) {
    
    const objetoDisco = new Disco(disco.nombre, disco.anio, disco.bandaCantante, disco.genero, [], obtenerImagenParaMostrar(disco.foto));
    $("#cardList").append(objetoDisco.verDatosResumen());
}