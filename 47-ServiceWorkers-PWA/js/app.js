
// * Detectar el soporte de Service Workers.
console.log(typeof navigator);

console.log(navigator);
if ('serviceWorker' in navigator) {

    // * Registramos el Service Worker.
    // ? Crearemos un archivo llamado sw.js
    // ? Registramos ese archivo.
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se registro correctamente', registrado))
        .catch( error => console.log('Fallo el registro...', error));

    // ? Dependiendo del contenido del Service Worker
    // ? va a tardar algo en ejecutarse.


}else {

    console.log('Service Workers no soportados');

}

