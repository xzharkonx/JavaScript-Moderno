
// # 42. Copiar 2 Objetos.

// ? Solo copiara aquellos atributos que sean diferentes en ambos objetos.
// ? Si algunos atributos de ambos objetos son iguales, se sobreescribira el valor 
// ? del atributo con el último objeto unido.

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1Kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// * Para unir los Objetos utilizaremos el siguiente método.
// ? Guarda y junta el contenido de ambos objetos en uno solo.
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// ## Spread Operator o Rest Operator
// * Existe otra forma que se le conoce como el Spread Operator o Rest Operator
// ? Con los tres puntos antes de la variable, le diremos que la copie.
// El resultado será el mismo.
// como si con ... se tomarán solo los atributos, si se coloca sin los ...
// entonces sería el objeto completo como tal.

const resultado2 = {...producto, ...medidas}
console.log(resultado2);

// En cambio aquí crearia un objeto con 2 atributos de tipo objeto para el producto y para las medidas.
// resultado3.producto y resultado3.medidas.
// resultado3.producto.nombre y resultado3.medidas.peso
const resultado3 = {producto, medidas}
console.log(resultado3);

// * Copiando un Objeto y agregandole atributos.
const pesa = {marca:"SpiritGym", ...medidas}
console.log(pesa);