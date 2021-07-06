
// # 282. Pure Functions.

// ? Son las funciones puras.

// ? Son funciones que retornan un dato pero no modifica
// ? los valores de las variables, es decir, si hay una
// ? variable global o una función global no van a 
// ? modificar ese valor, si no que retornan un dato
// ? nuevo y otra característica.

// ? Otra característica es que con una entrada de datos,
// ? es decir, toman un parámetro, deben retornar la
// ? misma cantidad de datos que recibe la entrada.

// * Pure Function
// ? La función de duplicar toma un número y retorna un
// ? número. Esa es una característica de las 
// ? funciones puras.
const duplicar = num => num * 2;

// * Variable Original
// ? La otra es que no modifican un valor original.
const numero1 = 20;

// * Variable nueva con nuevo dato.
// ? Al hacer uso de duplicar, tendríamos 
// ? una nueva variable.
const resultado = duplicar(numero1);


// * - La variable numero1 conserva su valor.
// ? - Utilizamos la Pure Function para resultado.
// ! - La variable resultado tiene el nuevo valor.

console.log(numero1);
console.log(resultado);