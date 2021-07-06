
// * 142. Obtener datos de LocalStorage


// # Variables

const nombre = localStorage.getItem('nombre');
// !! Los valores que no encuentre serán iguales a null (no nos marcará error).
// const nombre2 = localStorage.getItem('nombre2');
console.log(nombre);


// # Objetos

// ? Trayendo al Objeto producto de localStorage
const productoJSON = localStorage.getItem('producto');

// ? Transformamos el String que tiene forma de objeto a objeto.
const producto = JSON.parse ( productoJSON );
console.log(productoJSON);
console.log(producto);

// # Arrays

// ? Trayendo el arreglo de meses de localStorage
const mesesJSON = localStorage.getItem('meses');

// ? Transformamos el String que tiene forma de Arreglo a Arreglo.
const meses = JSON.parse ( mesesJSON );
console.log(mesesJSON);
console.log(meses);