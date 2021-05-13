
// # 47. Acceder a los valores de un Array

const numeros = [10, 20, 30, 40, 50, [1, 2, 3], {nombre: "Luis", edad: 28}];

console.log(numeros);
console.table(numeros);

// ## Acceder al arreglo

console.log(numeros[2]); // 30
console.log(numeros[0]); // 10
console.log(numeros[20]); // Undefined
console.log(numeros[5][1]); // 2
console.log(numeros[6].nombre); //Objeto.valor