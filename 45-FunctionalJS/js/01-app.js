
// # 276. ¿Qué es Functional JS?

// !! Esto no se puede hacer
let cliente = `usuario`;

cliente = `nuevoUsuario`;


// # 276. First Class Functions.

// ? Es básicamente, cuando un lenguaje puede asignar
// ? una función como si fuera un String, un número o
// ? un booleano, quiere decir que ese lenguaje soporta
// ? First Class Functions.

// * Tiene esta forma
const suma = function(a, b) {

    return a + b;

}

const resultado = suma;

// ! Lo de arriba es como si estuvieramos asignando un valor.
// consr resultado = 20;
// ? Sin embargo se le esta asignando una función por lo que es 
// ? First Class Functions.

// ? Entonces si puedes asignar una funcion de esa forma entonces
// ? el lenguaje soporta First Class Functions.

// * finalmente utilizamos el resultado.
console.log(resultado(5,15));


