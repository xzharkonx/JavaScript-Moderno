
// # 226. Detectar cuando estamos viendo la página web actual.

// ? Con este comando detectaremos si es que está visible la página
// document.visibilityState

// * Visible: visible
// ! No visible: hidden

// ? Cada vez que cambiemos de página este evento se va a estár ejecutando.
// ? Que es cuando se cambia la visibilidad de la página.
document.addEventListener('visibilitychange', () => {

    // ? Vemos el estado de visibilidad
    // console.log(document.visibilityState);

    // ? Por ejemplo en youtube o página podría suceder lo siguiente
    // ? cuando miramos un video.
    if( document.visibilityState === 'visible') {
        console.log('Visible');
        console.log('Ejecutar la función para reproducir el video ...');
    } else {
        console.log('No Visible');
        console.log('Pausar el video');
    }

});

// * Aquí ya dependerá de la lógica que implementemos cuando la página 
// * sea visible o no.