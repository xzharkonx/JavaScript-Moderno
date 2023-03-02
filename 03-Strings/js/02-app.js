
// # 15. String Methods - includes y length

const producto = 'Monitor de 20 Pulgadas';

console.log(producto);

// ## Para saber cual es la longitud de la cadena de texto.
// * Nota: El método lenth es uno de los pocos para esta clase String que no necesita ()
// * Como es un una propiedad, más adelante veremos como crearlas.
console.log(producto.length);

// ## Para saber si la primera palabra o conjunto de letras de la cadena de texto o letra están
// ## en la cadena de texto y "nos dará su posición en la cadena". 
// ! En caso contrario de no encontrarla nos devolverá el valor de -1.

console.log(producto.indexOf('Monitor'));
console.log(producto.indexOf('monitor'));
console.log(producto.indexOf('Pulgadas'));

// * Existe también otro llamado includes un poco más útil.
// ! Si no existe nos devolvera false, pero si, si, nos devolverá true.
console.log(producto.includes('Tablet'));
console.log(producto.includes('Monitor'));
console.log(producto.includes('monitor')); // ! Varia dependiendo las mayusculas y minusculas.
