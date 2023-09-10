
// # 44. El Object Constructor

// ## Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// ## Object Constructor
// !* Otra forma de crear objetos
// ? Se automatiza más cuando son múltiples Objetos
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// !* Mira que también puedes agregar más atributos al constructor
// !* independientemente con el mismo nombre.
function Producto(nombre, precio,marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
    this.marca = marca;
}

// ? Aquí el invocar producto es crear una instancia y pasarle los valores como si fuera
// ? un constructor
const producto2 = new Producto('Monitor 24 Pulgadas', 500);
console.log(producto2);

// Creamos otro objeto
const producto3 = new Producto('Television', 100);
console.log(producto3);

const producto4 = new Producto('Ps5', 15000,'Sony');
console.log(producto4);