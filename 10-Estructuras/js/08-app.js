
// # 76. Detener la ejecución de un if con una función

const autenticado = true;

if (autenticado) {
    console.log(`El usuario esta autenticado`);
}

const puntaje = 500;

// if (puntaje > 400){
//     console.log(`Excelente!!!`);
// } else if (puntaje > 300){
//     console.log(`Buen puntaje... felicidades`)
// }

function revisarPuntaje(){
    
    if (puntaje > 400){
        console.log(`Excelente!!!`);
        return; // ! Dejará de ejecutarse el resto del codigo y detendrá la ejecución actual
                // ! del proceso.
    }
    
    if (puntaje > 300){
        console.log(`Buen puntaje... felicidades`)
        return; // ! Dejará de ejecutarse el resto del codigo y detendrá la ejecución actual 
                // ! del proceso.
    }

}

revisarPuntaje();
