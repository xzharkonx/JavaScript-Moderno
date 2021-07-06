
// # 285. Partials y Currying.

// ? Básicamente Currying es dividir una función que toma 
// ? más de un parámetro en argumentos de forma parcial.

// * Función que suma 3 numeros.

const suma = (a,b,c) => a + b + c;
console.log(suma(1,2,3)); // 6


// ! Pero queremos hacer uso de Currying y de Partials.
// ? Currying va a divir la función en parciales.
// ? Digamos que por partes.

// * Creación del Currying 
// ? Por lo tanto, este primper parcial tomaría la letra a
// ? Mientras que este otro tomaría la letra b y c.
// const parcial = () => () => {};

const parcial = a => (b,c) => suma(a,b,c);

// ? Se ve muy extraño pero basicamente estamos
// ? dividiendo la primer parte que tome un número (a)
// ? y la segunda que tome el segundo (b) y el
// ? tercero (c)

// * Utilizando el parcial para ejecutar.
// ! Retornará una función.
const primerNumero = parcial(5);

// ? Como estamos aplicando Currying, podemos utilizar
// ? la segunda parte es como dividir esta función.
// ? Por lo tanto volveremos a ejecutar otra función
// ? en entro argumento.

const resultado = primerNumero(4,5);
// ! Retornará el resultado de la función (porque
// ! es la última).

// * Eso es el Currying.
// ? Es dividir una función que toma más de un parámetro
// ? en argumentos de forma parcial.

console.log(resultado); // 12

// ## Ejemplos de Currying y Parcial

// ! Podríamos crear una nueva función con más parcials.
const parcialLargo = a => b => c => suma(a,b,c);

// ### Forma Larga
// const parcial1 = parcialLargo(10);
// const parcial2 = parcial1(20);
// const r = parcial2(30);

// ### Forma Corta
// ? Se ve muy extraña está sintaxis.
const r = parcialLargo(10)(20)(30)

console.log(r); // 60


// ? Cada parcial retornará una función solo la última
// ? retornará el resultado completo.

// ## Ejemplo de Currying y Partials.
// ? Partiendo una funcion y llamando cada una de sus partes.
const nombreCompleto = profesion => nombre => apellido => profesion + nombre + apellido;
console.log(nombreCompleto("Ingeniero")(" Luis E. ")("Garcia")); // Ingeniero Luis E. Garcia

