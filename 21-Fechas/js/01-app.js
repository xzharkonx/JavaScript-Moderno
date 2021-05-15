
// # 152. El objeto Date()
// * Nos da el día, el año, la hora, minutos, segundos, el tiempo de zona.

// const diaHoy = new Date();

let valor;
// valor = diaHoy;

// const diaHoy = new Date('1-16-1993');
const diaHoy = new Date('January 16 1993');

//* Metodos para el objeto de fechas
// ? Con get traeremos la información de las fechas
// ? Nos dará el año de la variable.

valor = diaHoy.getFullYear(); // * Año
valor = diaHoy.getMonth(); // * Mes (inicia como un array desde el 0 - 11)
valor = diaHoy.getDay(); // * Día
valor = diaHoy.getHours(); // * Horas
valor = diaHoy.getMinutes(); // * Minutos
valor = diaHoy.getTime(); // * Milisegundos desde el 1 Enero de 1970

//? Con set modificaremos la información del objeto de las fechas
valor = diaHoy.getFullYear(); // Año

// Tomaremos el tiempo actual desde el 1 Enero de 1970 en milisegundos.
const tiempoActual = Date.now();

//! Nota importate: No valides fechas con JS, validalas en el el servidor

console.log(valor);
console.log(tiempoActual);
