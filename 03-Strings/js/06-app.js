
// 19. String Mehtods - Repeat y Split

const producto = 'Monitor 20 pulgadas';

// .repeat te va a permitir repetir una cadena de texto...

const texto = ' en promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// El número se redondeará si ponemos un valor que no es entero, en este caso
// dará 2 repeticiones.
// const texto = ' en promoción'.repeat(2.4);



// Split va a permitir dividir un String y nos devolverá un array

const actividad = "Estoy aprendiendo JavaScript Moderno";

// Habrá que indicarle porque caracter queremos que se divida el texto
// en este caso será por medio de espacios, entonces le pasamos un espacio.
console.log(actividad.split(" "));

// Otro ejemplo
const hobbies = 'Leer, caminar, escuchar, música, escribir, aprender a programar'
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModerno"
console.log(tweet.split('#'));

