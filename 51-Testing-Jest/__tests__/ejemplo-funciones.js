
// # 326. Probando Funciones.

// * Lo más común es escribir testing hacia funciones.
// ? Esas funciones te van a permitir como integrar datos
// ? con otras partes de tu aplicación.
// ? Por lo que será muy común comprobar que las funciones
// ? hagan lo que deben de hacer.


// Tomamos estas 2 funciones para comprobar lo que uno espera.
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}


describe('Testing a las funciones de Suma y Resta', () => {

    // ## Pruebas comprobando que si tengan ese valor que esperamos.
   
    test('Suma de 20 y 30', () => {
       
        // ? Al expect le pasaremos la función que queramos comprobar 
        // ?    ejecutandola con sus parametros.
        // ? La función .toBe() le pasaremos lo que esperamos recibir.
        expect(suma(20, 30)).toBe(50);

    });
    
    test('Resta de 10 - 5', () => {
       
        // ? Al expect le pasaremos la función que queramos comprobar 
        // ?    ejecutandola con sus parametros.
        // ? La función .toBe() le pasaremos lo que esperamos recibir.
        expect(resta(10, 5)).toBe(5);

    });

    
    // ## Pruebas comprobando que no tengan ese valor que esperamos.

    test('Que la suma 10 y 10, no sea 10', () => {
        
        // ? Comprobando que la suma de 10 + 10 no sea 10
        expect(suma(10, 10)).not.toBe(10);

    });

    test('Que la resta de 10 - 5, no sea otro valor', () => {
        
        // ? Comprobando que la resta de 10 - 5 no sea 2
        expect(resta(10, 5)).not.toBe(2);

    });


});

// ### Una vez comprobando las 2 situaciones y que pasa esperamos
// ### y lo que no esperamos, entonces podemos verificar que la Función
// ### está bien hecha y no va a marcar errores ya en producción.