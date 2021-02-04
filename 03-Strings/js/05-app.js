
// 18. String Methods - Replace, Slice y Substring

const producto = 'Monitor 20 pulgadas';

// Método que nos permite remplazar una cadena de texto

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// Cortar una cadena de texto con .slice

// Le indicamos un indice desde donde iniciará y con otro número hasta donde cortará la cadena.
console.log(producto.slice(0,18));

// Si le indicamos un solo número, este será el indice desde donde empiece a cortar la cadena.
console.log(producto.slice(8));

// Si el primer número es mayor qe el segundo no va a hacer nada.
console.log(producto.slice(2,1));



// Alternativa a .slice que es .substr

// El resultado se puede ver que es exactamente lo mismo.
console.log(producto.substr(0,10));

// Pero la diferiencia es que si inviertes los números, este es como un poco más inteligente
// y tratará de mostrarte algo con respecto a los valores que tiene si colocas el primero mayor
// que el segundo. Es como decirle, desde el 2 recorreme 1 hacia adelante.
console.log(producto.substr(2,1));

// Y .substring lo hace pero hacia atrar. Es como decirle, desde el 2 recorreme 1 hacia atrás.
console.log(producto.substring(2,1));

// Otro ejemplo
const usuario = 'Luis';
console.log(usuario.substring(0,1));

// Otra forma de decirle, solo corta la primer letra con .charAt
console.log(usuario.charAt(0));
