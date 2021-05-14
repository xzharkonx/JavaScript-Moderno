
// # 80. El ejercicio Fizz Buzz

// ? De un array del 1 al 100, verificar si al recorrer cada número
// ? es divisible entre 3 y 5 imprimiremos Fizz Buzz y el número,
// ? o solo entre 3  imrpimiremos Fizz y el número,
// ? o bien solo entre 5 imprimiremos Fizz Buzz y el número.

// * Creamos un array con números del 1 al 100
let l = [];
for (let i = 0; i < 101; i++) {
    l = [...l,i];
}

// * Arreglo de números del 1 al 100
// l.forEach(n => console.log(n));

l.forEach(n => {
    // Si el numero en turno es divisible entre 3 y 5
    if (n%3 == 0 && n%5 == 0) {
        console.log(`Fizz Buzz [${n}]`);
    // Si el numero en turno es divisible entre 3
    } else if(n%3 == 0){
    console.log(`Fizz [${n}]`);
    
    // Si el numero en turno es divisible entre 5
    } else if (n%5 == 0){
        console.log(`Buzz [${n}]`);
    // Si el número no es divisible.
    }else {
        console.log(`Tristizimo! número triste! [${n}]`);
        
    }
});

console.log(`Terminado.`)

// En una sola línea / Paradigma Funcional
// l.forEach(e => e%3 == 0 && e%5 == 0 ? console.log(`Fizz Buzz [${e}]`) : e%3 == 0 ? console.log(`Fizz [${e}]`) : e%5 == 0 ? console.log(`Buzz [${e}]`) : console.log(`Tristizimo! [${e}]`) );
// console.log(`Terminado.`)