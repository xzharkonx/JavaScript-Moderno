// # 320. Más funciones a nuestro Framework.

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
// let resultado = suma(1,4); // Mala implementación de la prueba porque no va a pasar, da 5.
let esperado = 3; // ! Esto sería como lo que esperamos que salga.

// - Hasta aquí serían como las bases de un Testing muy sencillo.

// ? Si es diferente a lo que estamos esperando.
// !! Significará que está prueba esta mal.
// !! Que algo en nuestro código esta mal y tenemos que solucionarlo.

// ! Puede deberse a 2 errores.
// !! La función no está haciendo lo que debe.
// !! La prueba esta mal implementada.
// * La ventaja sería tener este mensaje de información.

// * Creando este nuevo tipo de función podemos hacerlo de una manerá mpas funcional.
expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado); // Agregamos nueva función anidada.


resultado = restar(10, 5);
// resultado = restar(10, 7); // Mala implementación de la prueba porque no va a pasar.
esperado = 5;

// * Creando este nuevo tipo de función podemos hacerlo de una manerá mpas funcional.
expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado); // Agregamos nueva función anidada.


// - Una función como en JEST. Es esta funcion vamos a tomar el valor esperado.
// - En JEST, esas funciones se llaman así también, (expected y toBe).
function expected(esperado) {
    return {
        toBe(resultado){
            
            // Con un operador ternario, lo mismo del if de arriba pero menos codigo.
            resultado !== esperado ? console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó.`) :
                console.log(`La prueba resta paso correctamente.`) ;
            },
            
            // - Podemos ir agregando más funciones!!! =3
            
        toEqual(resultado) {

            // Con un operador ternario, lo mismo del if de arriba pero menos codigo.
            resultado !== esperado ? console.error(`El ${resultado} no es igual a lo esperado; la prueba no pasó.`) :
                console.log(`La prueba resta paso correctamente.`) ;

        }

    }
}