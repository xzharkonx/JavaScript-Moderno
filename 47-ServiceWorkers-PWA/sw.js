

// - Vamos a tener un arreglo con diferentes archivos.
// - Vamos a estar cachando y en caso de que no tengamos
// -| conexión a internet va a tener una copia de ese
// -| cache o leer esos datos de caché y va a mostrarlos.

// * Eso es lo que hace una PWA muy rápída.

// - También, por ejemplo, en caso de que haya conexión
// -| a internet y ya visitamos el sitio web, entonces
// -| va a cargar los datos de cache.

// ! Muy importante
// ? Es que si tenemos dos páginas, por ejemplo págia A y
// ? la página B, si visitamos la página A eso va a descargar,
// ? si vas a la página B, descarga también lo que es el cache
// ? de la página B.

// ? Si por algo el visitante solo visita una página, pero
// ? después se queda sin conexión e intenta visitar la página B
// ? la página no va a funcionar.
// ? Podrías agregar esa segunda página al cachém pero si agregas 
// ? todo el sitio web a caché va a ser algo lenton ese Catching
// ? digamos la descarga. Y una PWA debe ser rápida.
// ! Solo no agregues 20, 30 páginas porque lo hará más lento.

// const archivos = [
//     '/', // Cacheamos la pág. principal.
//     '/error.html', // Agregamos está página en caso de error.
//     '/index.html', // También el archivo.
//     '/css/bootstrap.css', // Los estilos también.
//     '/css/styles.css',
//     '/js/app.js',
//     '/js/apv.js',
//     '/manifest.json',
//     // Puedes cachear también fuentes, iconos, imágenes,
//     // cualquier archivo en realidad.
//   ]

// Lo de arriba funciona si lo cargamos desde la raíz.
// Se carga desde la carpeta en que está este proyecto.

  const archivos = [
    '/47-ServiceWorkers-PWA/',
    '/47-ServiceWorkers-PWA/error.html', // Agregamos está página.
    '/47-ServiceWorkers-PWA/index.html',
    '/47-ServiceWorkers-PWA/css/bootstrap.css',
    '/47-ServiceWorkers-PWA/css/styles.css',
    '/47-ServiceWorkers-PWA/js/app.js',
    '/47-ServiceWorkers-PWA/js/apv.js',
    '/47-ServiceWorkers-PWA/manifest.json',
  ];


// * Debemos tener un nombre para el cache
const cacheName = 'apv-v2';
const offlinePage = '/47-ServiceWorkers-PWA/error.html';

// # Instalando y Registrando el Service Worker

// ! no puedes utilizar la palabra reservada window
// ? En vez de eso debes utilizar la palabra self

// * El evento de install se a encargar de 
// * instalar el Service Worker
self.addEventListener('install', e => {
    
    // ? Esto solo se ejecuta una vez hasta que
    // ? el Service Worker a quedado instalado.
    console.log('Instalado el Service Worker');
    console.log(e);

    // Para cachear neustros archivos, aveces tarda mucho
    // porque son muy pesados, entonces para ello
    // tenemos la siguiente función, que esperará a que
    // todos ellos se hayan cargado.

    // ? Espera hasta que se hayan descargado todos los caches.
    e.waitUntil(
        caches.open(cacheName) // Este será un promise.
            .then(cache => {
                console.log('Cacheando');
                cache.addAll(archivos) // Para un arreglo de archivos
                // cache.add(archivo) // Para un archivo
            })
    )
    
});

// ? Activar el Service Worker
self.addEventListener('activate', e => {
    // ? Esto solo se ejecuta una vez cuando se
    // ? activa el Service Worker.
    console.log('Service Worker Activado');
    console.log(e);

    // ? Esperamos hasta que se cumpla la parte de obtener los caches
    e.waitUntil(
        
      // ? Recuperaremos los nombres de las versiones que tenemos
        caches.keys().then(keys => {
          // ! Mostrando los nombres de las versiones que tenemos.
          // console.log(keys);
          
          // Retornamos así el promise porque vamos a realizar diferentes operaciones
          return Promise.all(
            // Ponemos el filter, porque tenemos 3 versiones y lo que vamos a hacer
            // es comparar con la versión actual y vamos a decirle que de los caches
            // que tengamos utilize el que sea igual a la versión actual y elimine los demás.

            // ? Con filter, filtraremos todos los caches que no son el de la versión actual
            // ? Con map, eliminaremos esos caches.
            keys.filter(key => key !== cacheName).map(key => caches.delete(key)) // Borra los demas
          )
        })
      )

});

// * Cada uno tiene ciertas funciones.
// - Cuando se instala es un buen lugar para cachear
// -| ciertos archivos.
// - Cuando se activa es un buen lugar para nuevas
// -| versiones de nuestra PWA.

// # Evento fetch para descargar archivos estáticos.
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    // ## Como mostrar los archivos que tenemos en cache.
    // ? Para que sea más rápida la descarga de muestra aplicación.

    // ? Dale una respuesta
    e.respondWith(
        // ? Recuerda no puedes utiliar document, sino caches.
        caches
          .match(e.request)// ? Identificar el request
          .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match(offlinePage)))
          // ! Si hay archivos en cache de esa ruta devuelvelos si no en caso de error retorna la página de error.
        // .catch(() => window.location.replace(errorPage))
      )
});

// Haber pa rápido...

// Quitan: .catch(() => window.location.replace(errorPage))



// Cambian: .then(respuestaCache => { return respuestaCache })

// Por:
// .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('/error.html)))

// O bien: .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('/47-ServiceWorkers-PWA/error.html')))


// - No se aguiten, vamos a lo que sigue ya pa acabar mis dioses del Olimpo... 8)