
// # 77. El Operador Ternario

const autenticado = true;
const puedePagar = true;


// console.log(autenticado && puedePagar ? `Si esta autenticado` : `No, no esta autenticado`);
console.log(autenticado || puedePagar ? `Si esta autenticado` : `No, no esta autenticado`);


// const efectivo = 200;
// const credito = 400;
// const disponible = efectivo + credito;
// const totalPagar = 600;

// if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
//     if(efectivo > totalAPagar){
//         console.log(`Si pagaste con efectivo`);
        
//     } else {
//         console.log(`Otra forma de pago`);

//     }
// } else {
    //     console.log(`Fondos Insuficientes`);
// }


// ## Anidado
console.log(autenticado ? puedePagar ? `Si esta autenticado y puede pagar` : `Si autenticado pero no puede pagar` : `No, no esta autenticado`);