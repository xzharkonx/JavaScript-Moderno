
// # 289.  Coercion.

// ? Es la conversión automática o implicita de valores
// ? de un tipo dado a otro.

const numero1 = 20;
const numero2 = "40";

// ? Estamos tratando de sumar un número con un String
// ! Lo termina convirtiendo a String.
console.log(numero1 + numero2); //2040

// * Esto se conoce como coerción implicita.
// ? Se esta forzando a que JS lo maneje y lo modifique.

// * Coercion Explicita.
// ? Existe otro tipo de coerción que se conoce como
// ? implicita. Esto usualmente requiere utilizar una fn.

// ? Con la función Number() convertimos a Número.
console.log(Number(numero2)); 

// ? Con la función toString() convertimos a String.
console.log(numero1.toString());

// ? Arreglo a un String.
const pedido = [1,2,3,4];
console.log(pedido.toString()); // Array a String sin []
console.log(JSON.stringify(pedido)); // Array a String con []

const persona = {
    id: 1,
    nombre: 'Luis',
    puesto: 'programador'
    
}
console.log(JSON.stringify(persona)); // Obj a String/JSON con {}