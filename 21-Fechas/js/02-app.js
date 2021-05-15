
// # 153. MomentJS tu aliado para formatear Fechas.
// ? https://momentjs.com/
// * Obtenemos la fecha

let fecha = new Date();
// Obtenemos la fecha y tiempo formateada y transformada en String
fecha = new Date().toLocaleString();
// Obtenemos solo el tiempo formateada y transformada en String
fecha = new Date().toTimeString();
// Obtenemos solo la fecha formateada y transformada en String
fecha = new Date().toDateString();

// console.log(typeof fecha);
console.log(fecha);

// ## MomentJS
// * MomentJS te permite pasarle un formato como tu desees
// ? Como ya lo agregamos en el HTML podemos hacer uso de el:
// moment();

// Le decimos que queremos las fechas en español
moment.locale('es');

// Nos dirá el mes en el cuál estamos
console.log(moment().format('MMM'));
// Nos agregará el día en el cuál estamos
console.log(moment().format('MMM Do'));
// Nos agregará el año en el cuál estamos
console.log(moment().format('MMM Do YYY'));
// Nos agregará la hora en el cuál estamos
console.log(moment().format('MMM Do YYY h'));
// Nos agregará los minutos en el cuál estamos
console.log(moment().format('MMM Do YYY h:mm'));
// Nos agregará los segundos en el cuál estamos
console.log(moment().format('MMM Do YYY h:mm:ss'));
// Nos agregará los am o pm en el cuál estamos
console.log(moment().format('MMM Do YYY h:mm:ss a'));

//! Ejemplo copiado de: https://momentjs.com/
// moment().format('LLLL'); // Wednesday, March 10, 2021 5:16 PM
console.log(moment().format('LLLL', fecha));; // Día, numDía de Mes de año hora:minutos PM

// * También se pueden hacer como unas operaciones con los días
// ? A la fecha actual nos agregará 3 días
// ? Está es ideal por ejemplo para un cupón que expiré en 3 días
console.log(moment().add(3, 'days').calendar());

