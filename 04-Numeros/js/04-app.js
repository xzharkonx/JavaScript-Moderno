
// # 24. El Orden de las operaciones.

let resultado;

resultado = 20 * 30 * 2;
console.log (resultado);

resultado = (20 * 30) + 2;
console.log (resultado);

// * 20% de descuento en tu carrito de compras

resultado = (20 + 30 + 40 + 50 + 60) * 0.2;
console.log (resultado);

// Un impuesto. Imagina 2 productos que valen 20 y 30 hay que agregarle
// un iva del 1.16 % y no de 0.16 por que si es de 0.16 solo dará el porcentaje.
// Por lo que si son 50 le sumará el 16% y por lo que 16% es 8 u 7.99999999
// nos mostrará 57.99999999
resultado = (20 + 30) * 1.16;
console.log (resultado);