
// # 63. Añadir Funciones en un Objeto

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist de \"${nombre}\"`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

// * Podemos agregar un nuevo método de propiedad al objeto

reproductor.borrar = function(id){
    console.log(`Borrando canción...${id}`);
}

reproductor.borrar(30);


// Creando una PlayList
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');

// Reproducir la PlayList
reproductor.reproducirPlaylist('Heavy Metal');
