
// # 92. .concat
// ? Nos va a permitir unir arreglos (arrays). El puro contenido.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// ## .concat
// const resultado = meses.concat(meses2);
// const resultado = meses.concat(meses2, meses3);
const resultado = meses.concat(meses2, meses3, 'otro mes');
console.log(resultado);

// ## spread operador
// ? El orden en que le pasemos los valores es importante ya que consevará la posición de los valores
// ? Al colocarle los 3 puntitos nos hara copias de los valores de las variables (el contenido de los arrays) y los unira
// ? en un nuevo array.
// ? Por que si lo ponemos sin puntitos, es como si colocaramos un array (bloque) dentro de una posición del array
// ? al que estamos creando y no los valores
// ? Si solo ponemos valores, estos deben ir sin puntitos ya que si no nos crearrá un arreglo si fuera un String

// const resultado2 = [...meses, ...meses2];
const mesExtra = 'Otro mes';
const unNumero = 33;
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes']; // * Unirá bien los valores
// const resultado2 = [...meses, ...meses2, ...meses3, ...mesExtra]; // ! Convertira el String en un array letra por letra
// const resultado2 = [...meses, ...meses2, ...meses3, mesExtra]; // * Unirá bien los valores
// const resultado2 = [...meses, ...meses2, ...meses3, unNumero]; // * Unirá bien los valores
// const resultado2 = [...meses, ...meses2, ...meses3, ...unNumero]; // !! Dará error.
console.log(resultado2);
console.log(...resultado2); // Solo imprime el contenido.

// !! let resultado3 = ...resultado2; // Error.
// !! console.log(resultado3); // Error.
// !! console.log(typeof ...resultado2); // Error