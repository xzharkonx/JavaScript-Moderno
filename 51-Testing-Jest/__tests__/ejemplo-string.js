
// # 323. Probando Strings.

const password = "123456";

// ? describe nos permite tener diferentes pruebas en un mismo archivo.
describe('Valida que e password no este vacio y tenga una etensió nde 6 caracteres', () => {

    // ? Aquí irán los test
    test('Que el password tenga 6 caracteres', () => {

        // ? Aquí colocaremos el código que va a validar esta prueba.
        // ? Puede ser que exista un código previo pero siempre necesitarás
        // ?    la función de expect().
        // - Le pasaremos lo que vamos a validar, en este caso nuestro valor.
        // - Despues podemos elegir direrentes métodos (como en el ejemplo del testing).
        
        // ! Con el método toBe() lo que hacemos es comprobar que lo que coloquemos en
        // ! el valor esperado, será igual a lo que le pasemos a esté método.
        // expect(password).toBe()
        
        // ! Con el método toHaveLength() lo que hacemos es comprobar que en
        // ! el valor tengamos 6 caracteres. Y le pasaríamos el valor de cuantos caracteres
        // ! queremos comprobar que tenga.
        expect(password).toHaveLength(6);
        
        
        // * Luego mandaremos a llamar a nuestro test con: npm t
        
    });
    
    // ? Validando que sea un 0 y negar esa condición de aceptar un password vació.
    test('Password no vacio', () => {
        
        // ? Recuerda que a expect se le pasa lo que vas a revisar (String/Object/Array/Num/...)
        // ! Así negaremos la condición para que no tenga una extención de 0
        expect(password).not.toHaveLength(0)

        // * Espera que la password no venga vacia.
        // * Luego mandaremos a llamar a nuestro test con: npm t
    });
    
});