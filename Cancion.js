class Cancion {

    constructor(nombre, duracion, orden, disco) {

        this.nombre = nombre;
        this.duracion = duracion;
        this.orden = orden;
        this.disco = disco;
    }

    ver() {
        return this.orden + ". " + this.nombre + " <strong>(" + this.duracion + ")</strong>";
    }
}