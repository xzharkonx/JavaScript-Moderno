
// # 81. While Loop

let i = 1; // ! Inicializar el while

while (i<10) { // ! Condición
    console.log(`Número: ${i}`);
    i++; // ! Incremento.
}

while( i < 100){

    if (i%3 == 0 && i%5 == 0) {
        console.log(`Fizz Buzz [${i}]`);
    } else if(i%3 == 0){
        console.log(`Fizz [${i}]`);
        
    } else if (i%5 == 0){
        console.log(`Buzz [${i}]`);
        
    }else {
        console.log(`Tristizimo! [${i}]`);
        
    }

    i++; // ! Incremento

}