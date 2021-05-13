
// # 39. El problema con los Objetos.

const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true, 
}

// * No se puede reasignar una variable constante
// const nombreProducto = 'Monitor';
// nombreProducto = 'Tablet';

// * Pero los objetos si se pueden reasignar, eso pasa porque una variable aunque este declaradá
// * como const al estar en un objeto, sus propiedades si se pueden sobreescribir o eliminar.
producto.disponible = false;
delete producto.precio;
console.log(producto);