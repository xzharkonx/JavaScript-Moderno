
// # 16. Concatenar un String y Template Strings

const producto = 'Monitor 20 pulgadas ';
const precio = '30 USD ';

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

// Otra forma de contatenar
console.log(producto + "Con un precio de: " + precio);
console.log("El producto: " + producto + "Tiene un precio de: " + precio);
// Otra forma de concatear es con una coma ,
console.log("El producto: ", producto, "Tiene un precio de: ", precio);
console.log("El producto: ", producto, "Tiene un precio de: ", precio, 10000);

// ## Una mejor forma de concatenar variables como se hizo despues en ES6 fue con los
// ## TemplateStrings o TemplateLiterals
// * En ves de utilizar '' o "" utiizas está comilla inclinada que se llama Backtick: ``

console.log(`El producto ${producto}tiene un precio de $ ${precio}`)