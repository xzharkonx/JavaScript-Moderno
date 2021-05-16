
// # 222. Notification API

// * Todas las APIs modernas de JavaScript o casi todas
// * utilizan promises, esa es la tendencia, que todas 
// * utilicen promises.


// ## Permiso de Notificaciones al Usuario

// ! Muy importante
// ? Para poder enviarle notificaciones a los usuarios
// ? ellos tienen que aceptar que van a recibir notificaciones,
// ? no puedes eviarle avisos así nada más por que lo deseamos.

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    
    // ## Utilizamos Notification API
    // ? Vamos a correr un metodo, que le va a preguntar al usuario si quiere
    // ? dar permisos para recibir notificaciones.
    // ? Cada navegador va a mostrar diferente su interfaz de mensaje.

    Notification
        .requestPermission() // Este método vendra con una promesa, por eso el .then()
        .then(resultado => { // resultado será el valor de la selección por el usuario.
            console.log(`El resultado es: ${resultado}`);

            //  * Valores que podemos resivir de la promesa si dimos permiso o no
            //  ? granted: Si le dimos el permiso
            //  ! denied: Si no le dimos el permiso
            // !! default: Si le dimos en cerrar
        })
});

// ## Envió de Notificaciones al Usuario

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {

    // * Revisamos el estado del permiso de la notificacion
    if(Notification.permission === 'granted') {
        
        //?  Si el usuario acepta las notificaciones
        // new Notification('Esta es la notificacion');
        
        // ? Le mandamos una respuesta más personalizada.
        // new Notification('Esta es la notificacion', {
        //     icon: 'img/populares2.jpg',
        //     body: 'Programación con Luis, Aprende super fácil con ejemplos.'
        // });

        // ? También si quieres que esa notificación lleve a alguien a un sitio
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/logo.png',
            body: 'Programación con Luis, Aprende super fácil con ejemplos.',
            image: 'img/populares2.jpg',
        });

        // ? Al hacer click lo enviará a esa página
        notificacion.onclick = function() {
            window.open('https://www.google.com');
        }

        console.log(notificacion);

        // * Se parece a las notificaciones de Pinterest =3
    }
})