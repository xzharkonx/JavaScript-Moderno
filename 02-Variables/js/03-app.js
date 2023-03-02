
// # 13. Todo lo que debes saber de las variables const

// ## La primer diferiencia con las variables de tipo const

//  * Es que no puede ser reasinado.
//  * Las variables con const se deben de inicializar con algún valor.
//  * Si no conoces el valor o el valor va a cambiar es mejor utilizar let.

// ! Pero los objetos si se pueden reasignar, eso pasa porque una variable 
// ! aunque este declaradá como const al estar en un objeto, sus propiedades
// ! si se pueden sobreescribir o eliminar.

// ! Pero los Objetos también se pueden congelar o sellar. Para interpretar const.
// ! Esto se verá más adelante...

// * Congelar: Para que el Objeto no pueda agregar o ser modificado ni eliminado ninguno 
// * de sus atributos.

// * Sellar: Para que solo puedan ser modificados sus atributos.

// * Para Sellar o Congelar Se usa la etiqueta de:
// "use strict";

// * Y los metodos de:
// Object.freeze( Objeto ); // Congelar
// Object.seal( Objeto ); // Sellar

// ! Así podríamos validar que no se modifique nada.


const producto = "Tablet";
// producto = "Monitor"; // !! Si la reasignamos nos saldrá un error de que 
// !! una constante no se puede reasignar

console.log(producto);

// !! Si lo hacemos de está forma dará error
// const precio;
// console.log(precio);

// * Así ya no dará error.
const precio = 20;
console.log(precio);