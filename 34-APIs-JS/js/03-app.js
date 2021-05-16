
// # 224. Detectar si hay conexión a internet o no.

// ? Para saberlo, podemos ejecutar el siguiente comando en la consola tal cuál está:
// navigator.onLine

// ? Este nos dará true o false si hay o no conexión a internet

// * En este caso por medio de window escucharemos con el evento de online.
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {

    // if(navigator.online) {
    //     console.log('Si estás conectado');
    // } else {    
    //     console.log('No estás conectado');
    // }

    console.log(navigator.onLine ? `Si esta conectado` : `No, no esta conectado`);

}

// ? El evento se ejecutará cuando cambie nuestro destado de conexión a internet.