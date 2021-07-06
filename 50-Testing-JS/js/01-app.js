
// # 319. Creando un Mini Framework para Testing.

// * Probar 2 valores

// ! Tenemos una función a la cuál le haremos la prueba.
function suma(a, b){
    return a + b;
}

// ## Función adicional
function restar(a, b){
    return a - b;
}


// ! Utilizamos la función pasandole valores.
let resultado = suma(1,2); // ? Esto sería como el resultado.
let esperado = 3; // ! Esto sería como lo que esperamos que salga.

// Aquí estaría mal implementada nuestra prueba porque no es lo que
// se le pasaría normalmente. El resultado es diferente a lo esperado.
// let resultado = suma(2,2);  // Esto sería como el resultado.
// let esperado = 3; // Esto sería como lo que esperamos que salga.

// - Hasta aquí serían como las bases de un Testing muy sencillo.

// ? Si es diferente a lo que estamos esperando.
// !! Significará que está prueba esta mal.
// !! Que algo en nuestro código esta mal y tenemos que solucionarlo.
if(resultado !== esperado) {

    // ! Puede deberse a 2 errores.
    // !! La función no está haciendo lo que debe.
    // !! La prueba esta mal implementada.
    // * La ventaja sería tener este mensaje de información.

    console.error(`El ${resultado} es diferente a lo esperado; la prueba suma no pasó.`);
} else {
    console.log(`La prueba suma paso correctamente.`);
}


resultado = restar(10, 5);
// resultado = restar(10, 7); // Mala implementación de la prueba porque no va a pasar.
esperado = 5;

// Con un operador ternario, lo mismo del if de arriba pero menos codigo.
resultado !== esperado ? console.error(`El ${resultado} es diferente a lo esperado; la prueba resta no pasó.`) :
    console.log(`La prueba resta paso correctamente.`) ;



// De esto tratan los diferentes frameworks de testing, tienen estas funciones
// ya implementadas y estas validaciones, así es como funcionan.

// JEST Tiene buenos mensajes de error para detectar si las puebas o la función tienen errores y así
// poder identificarlas.