
// # 68. Arrow Functions en el Reproductor de Música

// * Extraemos el código de la siguiente sección para trabajar con ella
// ? 63. Añadir Funciones en un Objeto

const reproductor = {
    // ? Añadimos la siguiente propiedad
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombre =>  console.log(`Creando la playlist de \"${nombre}\"`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    // * Junto a estos metodos de propiedad también hay otros que se conocen como set y get
    
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

// * Invocación de métodos
// Set
reproductor.nuevaCancion = 'Enter Sandman';

// Get
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Heavy Metal');
