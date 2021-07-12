
// # 325. Probando Objetos.

const cliente = {
    nombre: 'Luis Eduardo',
    balance: 500
}

describe('Testing al Cliente', () => {

    // * Verificamos este objeto y ver si el cliente tiene más de 400
    // * entonces pertenece a la categoría de premium.
    test('El cliente es premium', () => {
        // ? Para comprobar que el valor sea mayor a 400, el método es: toBeGreaterThan(400)
        // ? es decir, ser mayor a, y le pasamos un valor.
        expect(cliente.balance).toBeGreaterThan(400);
        // ! Si resulta ser mayor pasará la prueba, si no fallará
    });

    // ? Otro test para verificar que el cliente es Juan Pablo.
    test('Es Luis Eduardo', () => {
        
        // ? Para verificar por un valor que sea exactamente igual, utiliariamos .toBe()
        expect(cliente.nombre).toBe('Luis Eduardo');
    });

    // ! Ya hicimos pruebas para comprobar que sea un valor...
    
    // ? Ahora comprobaremos de otra manera.

    // * Pruebas para comprobar que no sea un valor

    test('No es otro cliente', () => {
        // ? Comprobamos si es verdad que el nombre no es Pedro
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () => { // !! Esta prueba no pasa porque si tiene 500
        // expect(cliente.balance).not.toBe(500);  // !! Error
        expect(cliente.balance).not.toBe(400);  // * Si pasa, pero no es lo que queremos.
    });

});

// - Algunas personas escriben para comprobar un valor 
// -| y también para comprobar que no sea un valor.

