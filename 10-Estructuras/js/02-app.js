
// # 70. Comparador Estricto

const puntaje = 1001;
const puntaje2 = "1001";
if(puntaje != 1000){ // != diferente == igual a
    console.log(`Si es diferente....`)
}

if(puntaje === "1000"){ //!= diferente == igual a
    console.log(`Si! es igual`);
} else {
    console.log(`No! es igual`);
}

// ==  Operador que no es estricto
// !=  Operador que no es estricto Con negación
// === Operador Estricto
// !== Operador Estricto Con negación

console.log(typeof puntaje);
console.log(typeof puntaje2);