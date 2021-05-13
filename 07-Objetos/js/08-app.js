
// # 40. Congelar un Objeto para no poderlo modificar.

//? Como hacemos para que un objeto se comporte como una constante, es decir, 
//? que no pueda ser modificado. Para ello usaremos el modo estricto.

"use strict";

// * Con el uso estricto nos permitira buenas prácticas de programación y además de que codigos 
// * como el de abajo nos darán error por no estar bien hechos.
// !! -----------------------
// x = 20;
// console.log(x);
// !! -----------------------

// * También, una vez que lo habilitemos, tendremos acceso a una serie de métodos para objetos.
// * o bien Object Methods

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// ## Congelando el Objeto
// * Para prevenir que un objeto sea modificado utilizaremos un método llamado freeze.
// * Le pasamos el objeto que queremos conjelar.

Object.freeze( producto );

// ? Por lo que hos arrojara un error si sobreescribimos o modificamos valores en el 
// ? objeto como se muestra abajo.

// !! Mira como si pueden modificarse esas propiedades del objeto pero que al usarse
// !! el modo estricto dejan de funcionar y nos dará un error

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

// * También podemos ver si un objeto está congelado o no.
console.log(Object.isFrozen(producto));

// Por lo tanto ya sabríamos que ya no lo podemos modificar.

