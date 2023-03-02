
// # 20. String Methods - Convertir a Mayúsculas o Minúsculas.

const producto = 'Monitor 20 pulgadas';

// ## toUpperCase() y toLowerCase()
// * toUpperCase (A Mayúscula) y toLowerCase (A Minúscula)

console.log(producto.toUpperCase());
console.log(producto.toLowerCase());

const email = "CORREO@CORREO.COM"
console.log(email.toLowerCase());

const precio = 300;
const precio2 = "500";
// * Los números se pintan de azul en la consola.
console.log(precio);

// ## Conversión de números a Strings y viceversa

// * Cambiamos de numero a String
console.log(precio.toString());

// * Cambiamos de String a Número
// ? Se utiliza el método parseInt y se le pasa un String que será
// ? convertido a entero en base decimal, para ello se agrega otro
// ? parametro con el valor de 10 (este es opcional).
console.log(parseInt(precio2, 10)); // ? El 10 indica la base pero es opcional.
console.log(parseInt(precio2));

// ! Podemos comprobar si la conversión es valida con isNaN()
// ! Es decir, si (true) hubo o no un error al convertir un String a un número