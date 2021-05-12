
// # 14. Crear Strings en JavaScript

// const producto = "Monitor de 20 pulgadas";

// * Escapamos las comillas con \
const producto = "Monitor de 20\"";
// * Otro tipo de comillas ''
const producto2 = String('Monitor de 24" pulgadas');

// Esto es como crear un nuevo objeto de tipo String
const producto3 = new String("monitor de 27 pulgadas");

console.log(producto);
console.log(producto2);
console.log(producto3);
// Cuando se guarda como Objeto se comporta como un array de letras del String
console.log(producto3[0]);


for (const letra in producto3) {
    if (Object.hasOwnProperty.call(producto3, letra)) {
        // const element = producto3[letra];
        console.log(producto3[letra]);
    }
}