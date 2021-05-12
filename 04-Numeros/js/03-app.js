
// # 23. El Objeto Math

let resultado;

// ## PI
resultado = Math.PI;
console.log(resultado);

// ## Redondear
resultado = Math.round(2.8);
console.log(resultado); // 3
resultado = Math.round(2.2);
console.log(resultado); // 2
resultado = Math.round(2.6);
console.log(resultado); // 3
// ## Redondea hacia arriba
resultado = Math.round(2.5); 
console.log(resultado);// 3
// ## Redondea hacia abajo
resultado = Math.round(2.4);
console.log(resultado); // 2


// ## Redondear hacia arriba, como que lo fuerza mientras sea mayor a 2.0
resultado = Math.ceil(2.1); 
console.log(resultado); // 3

// ## Redondear hacia abajo, como que lo fuerza mientras sea menor a 3.0
resultado = Math.floor(2.9);
console.log(resultado); // 2

// ## Raíz Cuadrada 
resultado = Math.sqrt(144);
console.log(resultado); // 12

// ## Absoluto
resultado = Math.abs(-500);
console.log(resultado); // 500

// ## Potencia
resultado = Math.pow(2,4);
console.log(resultado); // 16

// ## Mínimo
resultado = Math.min(3,5,1,12,-3);
console.log(resultado); // -3

// ## Máximo
resultado = Math.max(3,5,1,12,-3);
console.log(resultado); // 12

// ## Aleatorio
// Pocas veces da números enteros.
resultado = Math.random() * 20;
console.log(resultado); // ? Numero random

// ## Aleatorio dentro de un rango
// Por ejemplo. Del 0 al 30. Redondeado hacia abajo con floor.
resultado = Math.floor(Math.random()*30);
console.log(resultado); // ? Numero random entero