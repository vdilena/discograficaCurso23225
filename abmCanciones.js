// Obtengo los discos del storage
const discos = JSON.parse(localStorage.getItem("discos"));
for (let indice = 0; indice < discos.length; indice++) {
    
    const disco = discos[indice];
    $("#disco").append(`<option value="${indice}">${disco.nombre}</option>`);
}

$("#formCanciones").submit((event) => {

    const disco = $("#disco").val();
    const nombreDisco = discos[disco].nombre;
    const nombreCancion = $("#nombreCancion").val();
    const duracionCancion = $("#duracionCancion").val();
    const ordenCancion = $("#ordenCancion").val();

    const cancion = new Cancion(nombreCancion, duracionCancion, ordenCancion, disco);

    // Busco en el storage, el disco donde guardar la cancion
    const discosEnStorage = JSON.parse(localStorage.getItem("discos"));
    const discoEncontrado = discosEnStorage.find(disco => disco.nombre == nombreDisco);
    discoEncontrado.canciones.push(cancion);
    localStorage.setItem("discos", JSON.stringify(discosEnStorage));

});