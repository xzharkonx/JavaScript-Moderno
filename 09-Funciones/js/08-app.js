
// # 63. Ejemplo con múltiples funciones que se pasan valores

function sumar(a, b){
    // console.log( a + b );
    return a + b;
}

const resultado = sumar(2,4);

console.log(resultado);


// ## Ejemplo más avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.16;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);
console.log(total);
console.log(totalPagar);