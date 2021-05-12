
// # 26. Converir Strings a Números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// * Con typeof le pedimos que nos muestre el tipo de dato que es.
console.log(typeof numero1);


// ## Convertir un String a número con Number.parseInt(var)
console.log(Number.parseInt(numero1));

// ## Convirtiendo de String a Entero y luego a String
// console.log(Number.parseInt(numero1).toString());

// ## Convertir con decimales con Number.parseFloat(var)
console.log(Number.parseFloat(numero2));

//!! Este nos retornarán un NaN que significa que no se puede convertir a número.
console.log(Number.parseInt(numero3));

// ## Revisar si un número es entero o no.
console.log(Number.isInteger(numero4)); // * Nos devolverá true si lo encuentra.

// ## Revisar si un número es NaN o no en la conversión. 
// ? Devolverá true o false.
// * Nos devolverá true si encuentra error en la conversión.
console.log(Number.isNaN(Number.parseInt(numero3))); 