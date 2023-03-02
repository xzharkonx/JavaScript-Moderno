
// # 71. Comparando Mayor o Menor que

const dinero = 300;
// const dinero = "300"; // Tener cuidado con la comparación de String
const totalAPagar = 300;

// No existe el comprador estricto para >== por lo que debemos tener
// cuidado cuando comparamos con String y Numeros.
if(dinero >= totalAPagar){
    console.log(`Si podemos pagar`);
} else {
    console.log(`Fondos Insuficientes`);
}