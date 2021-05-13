
// # 74. El Operador && para revisar que se cumplan 2 o más condiciones

const usuario = true;
const puedePagar = true;

// if(usuario){
//     console.log(`Si eres usuario`);
// } else if(puedePagar){
//     console.log(`Si puede pagar`);
// }

if(usuario && puedePagar){
    console.log(`Si puedes comprar`);
} else if(!usuario && !puedePagar){
    console.log(`No, no puedes comprar`);
} else if (!usuario){
    console.log(`Inicia sesión o saca una cuenta`);
} else if (!puedePagar){
    console.log(`Fondos Insuficientes`);
}