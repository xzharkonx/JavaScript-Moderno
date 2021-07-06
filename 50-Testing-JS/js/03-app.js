
// # 321. Probando Código Asincrono.

// - Crearemos una función de Test para tener Promises.
// - En caso de que se cumpla o no la condición.
// - Y aceptar la pruena que estamos realizando.

// * Probar 2 valores

// ! Tenemos una función a la cuál le haremos la prueba.
function suma(a, b){ // 10, 20
    return a + b; // 10 + 20 = 30
}

// ## Función adicional
function restar(a, b){
    return a - b;
}

// - Crearemos un Promise aquí para poder utilizar un trycatch.
// - Si no se cumple caíga en el catch y la prueba no se cumpla.
// ! Para tener acceso al trycatch vamos a utiliar async await.

async function sumaAsync(a, b){ // 10, 20
    return Promise.resolve( suma(a,b) ); // 10 + 20 = 30
}

// * Test
// - En JEST, tu defines tu prueba, por lo tanto se le pasa un mensaje referente.
// - Mira también, como se le pasa una función, pero esta se pasa como arrow function.
test(`Suma 10 + 20 y el resultado debe ser 30`, async () => {
    
    // ? Con await esperamos a que se ejecute está función.
    // ? y luego que continue lo demás.
    const resultado = await sumaAsync(10,20); // 30
    const esperado = 30;
    expected(esperado).toBe(resultado); // 30, 30

})

// - Aquí crearemos la función de Test que es un común en JEST.
async function test(mensaje, callback){
    try {

        // ? Ejecutamos el arrowfunction y esperamos los datos de la función test.
        // * Si fue un exito Imprimirá: La prueba resta paso correctamente.
        // !! Si fue un error Imprimirá: El Suma 10 + 20 y el resultado debe ser 30 
        // !! es diferente a lo esperado; la prueba no pasó.
        await callback();
        console.log(`El Test: ${mensaje}, se ejecutó correctamente`);
    } catch (error) {
        
        // !! En caso de error, muestralo.
        console.log(error);
    }
}


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