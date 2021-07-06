
// # 278. Funciones como Argumentos.

// * Tiene esta forma con arrow function.

const suma = (a, b) =>  a + b;
const multiplicar = (a, b) =>  a * b;

// ? Creamos una nueva función donde tendrá
// ? como parametro funciones.
const sumarOMultiplicar = fn => fn(20, 15);

// ! Mira que dependiendo las funciones que se le pase,
// ! .es lo que hará

console.log(sumarOMultiplicar( suma ));
console.log(sumarOMultiplicar( multiplicar ));

// * - La sintaxis es un poco extraña, tiene un enfoque más matemático.
// * - Menos codigo, lo hace de forma más imperativa.



