
// # 57. La diferiencia entre Function expression y Declaration

// ! Está función si se ejecuta porque en la primera pasada registra las variables 
// ! y las funciones, luego las ejecuta y para lo último la asígna a la función.

// * Esto es a lo que se le conoce como el Hoinsting.

sumar();

// ## Expresión de Función (Function Declaration)
function sumar(){
    console.log( 2+2 );
}


// !! Está función ya no se ejecuta.
sumar2();

// ## Expresión de Función (Function Expression)
const sumar2 = function(){
    console.log( 3+3 );
}

// * Hoisting. Ejemplo.
// ? Porque primero crea la variable sumar2 
// const sumar2;
// ? y luego la ejecuta
// !! Por lo que dara error ya que solo esa como variable.
// sumar2();
// ? y para lo último la asígna a la función
// const sumar2 = function(){
//     console.log( 3+3);
// }
