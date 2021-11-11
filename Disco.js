class Disco {

    constructor(nombre, anio, bandaCantante, genero, foto, canciones) {

        this.nombre = nombre;
        this.anio = anio;
        this.bandaCantante = bandaCantante;
        this.genero = genero;
        this.foto = foto;
        this.canciones = canciones;
    }

    verDatosResumen() {

        //console.log(this);

        document.write("<ul>");
        document.write("<li>Nombre: " + this.nombre + "</li>");
        document.write("<li>Año lanzamiento: " + this.anio + "</li>");
        document.write("<li>Cantante o banda: " + this.bandaCantante + "</li>");
        document.write("<li>Genero: " + this.genero + "</li>");
        document.write("</ul>");

        this.verCanciones();
        document.write("----------------------<br>");
    }

    verCanciones() {

        for (const cancion of this.canciones) {

            document.write("<ul>");
            document.write("<li>" + cancion.ver() + "</li>");
            document.write("</ul>");
        }
    }
}