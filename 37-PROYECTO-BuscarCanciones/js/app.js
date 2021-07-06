
// * Seeción 37: PROYECTO. Buscador de Canciones con Fetch API

// Link API: https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
// API: https://api.lyrics.ovh/v1/artist/title


// Importará todo lo que haya en ese archivo
// Todo tendrá el alias de UI
// Es una forma de agrupar todo.
import * as UI from './interfaz.js';
console.log(UI); 

import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;


    if(artista === '' || cancion === '') {
        // El usuario dejo al menos un campo vacio, mostar error
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            // Quitamos el mensaje previo del error
            UI.divMensajes.textContent = '';
            // Quitamos la clase previo al error
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    // # Consultar nuestra API

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();

    
}