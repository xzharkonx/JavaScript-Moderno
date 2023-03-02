
// # 34. Como Acceder a los valores de un objeto.

// ## Object literal
const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    marca: {
        nombre: "HUION",
        modelo: 'Kanvas Pro'
    }
}

// ### Llamando al objeto.
console.log(producto);

// ### Llamando a las variables del objeto.
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// ### Otra forma de acceder a las variables del objeto.
console.log(producto['nombre']);
console.log(producto['marca'].nombre);
console.log(producto['marca'].modelo);