
// # 29. Comparar Null y undefined en JavaScript

// ## undefined: Probablemente la variable este definida pero su valor no.

let numero;
console.log(numero);
console.log(typeof numero);

// ## Null
// * Este por lo regular se asigna pero aveces llega a obtenerse cuando se capturan datos
// * y no se obtiene nada.
let numero2 = null;
console.log(numero2);
// ? Ecma nos dice que los null deben de ser un objeto
console.log(typeof numero2);


// ! Vemos que al comparar estás dos variables nos dará true, esto es porque a pesar de que 
// ! los valores no tienen un valor eso usualmente lleva a comportamientos extraños porque 
// ! estamos comparando un valor que no existe y nos retorna true.
console.log(numero == numero2); // true
// * Así que es mejor utilizar el comparador estricto y lo compara mejor
console.log(numero === numero2); // false