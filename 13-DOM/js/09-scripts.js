
// # 103. Eliminar elementos en el DOM

// * Utiliando el metodo de remove() o removeChild()

// ? Existen 2 formas de eliminar elementos
// ? Eliminar el elemento por si mismo.

const primerEnlace = document.querySelector('a');

// ? Removemos el enlace
primerEnlace.remove();
console.log(primerEnlace);

// ## Eliminar el elemento desde el padre.
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

// ## Removemos el elemento desde el padre
// ? Hay que pasarle la referencia del hijo, seleccionamos la posición n° 2 del tercer enlace
// ? Recuerda que los arreglos de nodos inician desde el 0
navegacion.removeChild(navegacion.children[2]);