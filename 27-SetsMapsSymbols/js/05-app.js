
// # 190. Symbols y sus Caracteristicas.

// ? - Son nuevos desde ES6.
// ? - Van a permitir crear una propiedad única.
// ! Es algo que se ve más en librerías y no tanto en codigo.

// * Creando un Symbol
const sym = Symbol();
const sym2 = Symbol();

if(sym === sym2){
    console.log('Son iguales.');
}else{
    console.log('Son diferentes.'); // Entra aquí
}

// ! Los Simbolos nunca son iguales
console.log(Symbol() == Symbol());

// * Ejemplo.

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// * Agregar nombre y apellido como llaves del Objeto
persona[nombre] = 'Luis';
persona[apellido] = 'GM';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// console.log(persona.nombre);  // !! No funcionara! porque nombre no es una variable.
console.log(persona[nombre]); // ? Funcionara! Se le pasa directamente el Objeto.

// ! Las propiedades que tengamos como Symbols no son iterables
for(let i in persona){
    console.log(i);
}


// # Definir una descripción del Symbol.
const nombrecliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombrecliente] = 'Pedro';
console.log(cliente); // ? Vemos que al mostrar el Symbol nos mostrará también la descripción.
console.log(cliente[nombrecliente]); // ? acceder al valor Pedro.
console.log(nombrecliente); // ? Descripción del Simbolo.




