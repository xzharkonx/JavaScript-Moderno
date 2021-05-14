
// # 82. Do While Loop

let i = 0;

// ? Ese se ejecuta al menos una sola vez, no importa si se cumple o no la condición.

do {

    if (i%3 == 0 && i%5 == 0) {
        console.log(`Fizz Buzz [${i}]`);
    } else if(i%3 == 0){
        console.log(`Fizz [${i}]`);
        
    } else if (i%5 == 0){
        console.log(`Buzz [${i}]`);
        
    }else {
        console.log(`Tristizimo! [${i}]`);
        
    }

    console.log(`Número ${i}`);
    i++; // ! Incremento
} while ( i < 100 ); // ! Condición