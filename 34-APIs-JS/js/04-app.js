
// # 225. Ejecutar pantalla completa con JS

// ? Es como lo parecido a YouTube, cuando le damos clic al icono
// ? de entrar o salir de pantalla completa de los videos.

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');


abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {

    // * De está forma se pondrá en modo pantalla pantallaCompleta.
    // ? Puedes colocar una imagen o un video.
    document.documentElement.requestFullscreen();
    console.log('Pantalla completa.');
    
    // ! Puede salir precionando la tecla ESC

}

function cerrarPantallaCompleta() {

    // * De está forma salimos de la pantalla completa.
    document.exitFullscreen();
    console.log('Saliendo de pantalla completa.');

}