
// # 192. generadores en JavaScript

// * Generador
// ? Un generador es una función que retorna un Iterador.

// ? - A un generador, al nombre de la función habrá que colocarle
// ?   un asterisco anteponiendose al nombre. Eso ya lo hace un generador.
// ? - Junto a un generador hay una palabra reservada llamada yield, son básicamente
// ?   los valores que se pueden iterar.
// ? - Estos yield serán los valores a los cuales nuestro generador va a entrar.

// ? yield pausa nuestra función y proporciona el estado del generador en ese momento particular.

// function* crearGenerador(){ // ! Así también funciona.
function *crearGenerador(){

    yield 1;
    yield 'Luis';
    yield 3+3;
    yield true;

}

const iterador = crearGenerador();
console.log(iterador);

// ? Al ver el elemento en la consola tendrá varias cosas diferenctes y funciones como:
// ? suspended y next(), donde el suspended se refiere a que se utiliza el iterador pero el
// ? generador se queda dormido porque no lo estamos utilizando.

// ? El next() es el que nos permitirá ir iterando sobre el generador. Una vez que utilizas
// ? está función el generador despierta y despues vuelve a suspended

console.log(iterador.next()); // ? Despierta.
console.log(iterador);  // ? Se suspende.

// ? Despierta. Y accedemos al 2do valor (porque ya se ejecuto antes).
// ? En vez de retornar luis con .value, con .done retorna false.
// ? esto es porque tiene otro valor llamado done que indicará si es el último elemento,
// ? entonces si lo es retornará true, pero como no, retorna false. y también salta el valor.
// ! Es como el Iterador que creamos anteriormente
console.log(iterador.next().done);  // false
console.log(iterador.next().value); // 6
console.log(iterador.next().value); // true
console.log(iterador.next().value); // undefined // Ya no hay más valores.

// ? Cada .next avanza al siguiente yield.

// ! Otra forma y la mejor podría ser la siguiente
// ? Destructuraremos los resultados de ir al sigiente elemento
// ? en el generador, así obtendremos el valor de la página
// ? y también si ya a terminado de recorrerlos o no. 
// const { value, done} = iterador.next();

// ## Generador para carrito de compras.

function *generadorCarrito(carrito){

    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i]; // ? Guarda cada contenido del array.
        
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3']

const iteradorCarrito = generadorCarrito(carrito);
console.log(iteradorCarrito.next()); // Producto 1
console.log(iteradorCarrito.next()); // Producto 2
console.log(iteradorCarrito.next()); // Producto 3
console.log(iteradorCarrito.next().done); // true // Porque ya a terminado.