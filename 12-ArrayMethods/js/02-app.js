
// # 87. .findIndex para encontrar la posición de un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// * Una forma un poco compleja para encontrar la posición del mes de abril en el arreglo
meses.forEach( (mes, i) => mes === 'Abril' ? console.log(`Fue encontrado en el índice ${i}`) : `` );

// ? Este método .findIndex() lo que hará será ir a buscar la posición de una variable 
// ? y si la encuentra retornará el valor de la posición
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);

// ? Si le pasamos un valor que no existe retornará un -1
const indice2 = meses.findIndex( mes => mes === 'Diciembre');
console.log(indice2);

// * Algunos ejemplos del método indexOf para buscar algún String
// Codigo extraido de:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/indexOf

const a = "Blue Whale".indexOf("Blue")    // returns 0
const b = "Blue Whale".indexOf("Blute")   // returns -1
const c = "Blue Whale".indexOf("Whale",0) // returns 5
const d = "Blue Whale".indexOf("Whale",5) // returns 5
const e = "Blue Whale".indexOf("",9)      // returns 9
const f = "Blue Whale".indexOf("",10)     // returns 10
const g = "Blue Whale".indexOf("",11)     // returns 10
const h = "Blue Whale".indexOf("",12)     // returns 10, the maximun
console.log(h);

// ! Podemos comprobar con una condición si el elemento está en ese índice y si si que haga algo
// if(indice){
//     ``;
// }

// ## Encontrar un índice de un arreglo de objetos...
// ? Pero si existen más de uno, solo encontrará la posición del primero y lo eligirá
const p = carrito.findIndex(  producto => producto.precio === 100);
console.log(p);