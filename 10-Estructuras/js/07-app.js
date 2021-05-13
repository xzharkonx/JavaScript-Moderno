
// # 75. El Operador OR para que se cumpla al menos una condición.

const efectivo = 200;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log(`Si podemos pagar`);
} else {
    console.log(`Fondos Insuficientes`);
}