

// Link API: https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
// API: https://api.lyrics.ovh/v1/artist/title


import * as UI from './interfaz.js'

class API {
    constructor(artista,cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        // Aquí se podría colocar un spinner

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                 console.log(resultado);

                if( resultado.lyrics) {
                    
                    const { lyrics } = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                    
                } else {
                    
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista} No existe`;
                    UI.divResultado.textContent = '';
                    UI.divMensajes.textContent = `La canción no exite, prueba con otra búsqueda.`;
                    UI.divMensajes.classList.add('error');
                    setTimeout(() => {
                        UI.headingResultado.textContent = ``
                        UI.divMensajes.textContent = ``;
                        UI.divMensajes.classList.remove('error');
                        
                    }, 3000);
                }


            })
    }
}

export default API;