
// # 35. Agregar o Eliminar Propiedades de un objeto.

// ## Object literal
const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// ## Agregar nuevas propiedades al objeto.
// * Escribiremos el nombre del objeto seguido de un punto y del nombre de la 
// * variables/atributo que queremos agregar al objeto. 
// ! Siempre y cuando no sea existente porque si no se va a sobreescribir.
producto.imagen = "Imagen.jpg";
console.log(producto);

// ## Eliminar un atributo del objeto.
// * Esto puede funcionar bien cuando traemos un objeto 
// * por ejemplo el del usuario y no queremos que nos traiga la password.
delete producto.disponible;
console.log(producto);