
// * Sección 1: Introducción al Curso  JavaScript

// alert('Hola Mundo');
// Pregunta al usuario su nombre.
const nombre = prompt('¿Cuál es tu nombre?');

// Toma el nombre y lo muestra en pantalla.
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;

/*
    Comentando
    código 
*/


// Estos códigos funcionarán en la consola de las herramientas de desarrollador.

console.clear(); // Limpiamos la consola.
console.log([1,2,3,4]);
console.table([1,2,3,4]);
console.table([[1,2],[3,4],[5,6]]);

console.error('Algo salió mal.');
console.warn('Esto es una advertencia.');

// Comparando el tiempo de ejecución de algún código.

console.time('Hola');

console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');
console.warn('Eso no esta permitido');

console.timeEnd('Hola');

// También en la consola se pueden crear Objetos o cualquier variable.

const obj = {
    nombre : "Luis",
};

// El poner el ; es a consideración nuestra.

// Instalamos ESLint
// Previamente tener instalado NodeJs
// Comando de instalación: npm i -g eslint

// Lo que hace ESLing es configurar que cosas u opciones quieres que ESLing revise por ti.
// Para ello crearemos un archivo .eslintrc.json
// Dentro agregaremos una configuración de que es lo que queremos que haga.
// Luego desde la consola nos ubiraremos en la raiz del archivo o desde una carpeta anterior
//      y escribiremos: eslint js/app.js
// Esto es para revisar si tiene errores o algo que le haga falta a nuestro archivo js.

// Si nos diera algún error como de que falta algún ; este se puede solucionar agregando
// al final del comando --fix: eslint js/app.js --fix