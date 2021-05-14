
// # 86. .includes .some
// * Array.includes (array), ArrayObjects.some (array de objetos)
// ? Si existe algo retornará true de lo contrario false

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// ## Arreglos
// ## Comprobar si un valor existe en un arreglo

// ### Forma explicita
meses.forEach( mes => { 
    if (mes == 'Enero') {
        console.log('enero si existe');
    }
    // console.log(mes);
});

// ? Este método .includes() va a revisar si un valor existe en un arreglo.
// ! Solo sirve para los arreglos.

// ### Forma funcional
const resultado = meses.includes('Enero');

// ! Veremos si existe ese valor (Retornará true, en caso contrarío será false).
console.log(resultado);


// --------------------------------------------------------------------------------------

// ## Objetos
// * En un arreglo de objetos se utiliza .some
// ? El método .some() sirve para los objetos.
// ? Comprueba si es verdadero o falso la comparación del valor y lo retorna.

// ### Forma explicita
// const existe = carrito.some( producto => {
    // return producto.nombre == 'Celular';
    // });
    
// ### Forma funcional
const existe = carrito.some( producto => producto.nombre == 'Celular');

console.log(existe);

// ? También .some sirve para los arreglos
// ! En un arreglo tradicional con .some
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);