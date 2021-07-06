
// # 294. ¿Que es self?

// ? Self básicamente se refiere a la ventana global
// ? y es igual a window, sin embargo, Self se utiliza
// ? mucho en los services workers y en los web workers.

console.log(window === self); // true

// Se refiere a la ventana global.
console.log(window.self === self); // true

// window.onload = () => {
self.onload = () => {
    console.log('Ventana Lista');
}


window.marca = 'Gucci';

const producto = {
    nombre: 'Monito 20 Pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        
        // ? Forma tradicional
        // return `El Producto: ${this.nombre} tiene un precio de ${this.precio}`
        
        // !! Hacerlo de esta forma dará error
        // return `El Producto: ${self.nombre} tiene un precio de ${self.precio}`
        
        // ? Para ellor crearemos una variable self que tomará
        // ? el resultado de this.
        // ! Quitas este, se mostrarla lo de la ventana global.
        // ! pero saldrá undefined para las variables propias.
        // ! y viceversa.
        const self = this; 
        return `El Producto: ${self.nombre} tiene un precio de ${self.precio} de la Marca ${self.marca}`
    }
}

console.log(producto.mostrarInfo());