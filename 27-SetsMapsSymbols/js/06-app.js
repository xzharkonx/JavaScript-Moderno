
// # 191. Iteradores en Javascript

function crearIterador(carrito){

    let i = 0;

    return {
        // Retornará un objeto con la función siguiente
        // lista para ser ejecutada

        siguiente: () => {
            // ? Se declara así porque si el indice es mayor o igual
            // ? a la longitud del carrito entonces será verdadero.
            const fin = (i >= carrito.length);
            
            // ? Si no hemos llegado al fin (que fin sea igual a true)
            // ? que ejecute algo si no lo otro.

            // ? Se le pasa i++ al carrito para que despues sume +1
            // ? Por lo que primero asigna el valor i=0 y luego lo suma +1
            // ? para el siguiente iteración.
            // ! Si fuera primero ++1 entonces primero sumaría +1.
            // ? Entonces devuelve el valor de la primera posición de la lista
            // ? y así sucesivamente con los demas: carrito[0]... carrito[1] ...
            const valor = !fin ? carrito[i++] : undefined;

            // ? Retornará un Objeto con estos 2 atributos e irá 
            // ? intercambiando el valor cada vez que se ejecute la función 
            // ? al siguiente valor.
            return {fin,valor};

        },

        // * Programamos uno adicional pero ahora en retroceso 8)
        anterior: () => {
            // ? Se declara así porque si el indice es mayor o igual
            // ? a la longitud del carrito entonces será verdadero.
            const inicio = (i <= carrito.length);

            // ? Si no hemos llegado al inicio (que inicio sea igual a true)
            // ? que ejecute algo si no lo otro.

            // ? Se le pasa i-- al carrito para que despues reste -1
            // ? Por lo que primero asigna el valor i=0 y luego le resta -1
            // ? para el siguiente iteración.
            // ! Si fuera primero --1 entonces primero restaria -1.
            const valor = inicio ? carrito[i--] : undefined;
            // ? Retornará un Objeto con estos 2 atributos e irá 
            // ? intercambiando el valor cada vez que se ejecute la función 
            // ? al siguiente valor.
            return {inicio,valor};

        },

        // * Reiniciar el iterador
        // ? Esta línea está un poco rara pero funciona
        reiniciar: () => i === 0 ? 'No reiniciado' : i=0 & console.log('Reiniciado') // ... & console.log('Hola mundo')
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3'];

// * Utilizar el iterador
// ? Tendremos en la variable recorrerCarrito un objeto.
const recorrerCarrito = crearIterador(carrito);

// * Comprobando el iterador
// ? Cada vez que  se ejecute la función, los valores del Objeto irán cambiando.
console.log(recorrerCarrito.reiniciar());

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

console.log(recorrerCarrito.anterior());
console.log(recorrerCarrito.anterior());

console.log(recorrerCarrito.reiniciar());
console.log(recorrerCarrito.siguiente());