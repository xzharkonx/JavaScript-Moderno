
// # 43. Funciones en Objetos y acceder a sus valores
// ? Utilizaremos la palabra reservada this.nombre_variable para referirnos
// ? a un atributo de un objeto.

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    },
    // ! Mira que aquí en los arrayfunction en vez de this llamamos al objeto para que funcione.
    oferta: () =>  console.log(`La oferta es de ${producto.precio * 0.8}`)
}
const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();
producto.oferta(); // * Ejemplo avanzado de una array function dentro de un objeto.
producto2.mostrarInfo();