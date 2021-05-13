
// # 72. Mayor o Igual y else if

const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if(dinero >= totalAPagar){
    console.log(`Si podemos pagar`);
} else if(cheque){
    console.log(`Si tengo un cheque`);
} else if(tarjeta){
    console.log(`Si podemos pagar porque tengo la tarjeta`);
} else {
    console.log(`Fondos Insuficientes`);
}