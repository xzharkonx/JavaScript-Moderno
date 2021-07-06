/**
 * @jest-environment jsdom
 */


// # 328. Agregar Babel para realizar pruebas de funciones en otros archivos.

import {suma} from '../js/funciones.js';

describe('Suma de 2 números', () => {

    test('Sumar 10 y 20, debe sar como resultado 30', () => {
        expect(suma(10, 20)).toBe(30);
    });
});

// !! Al hacer esto, Jest nos marcará un error a pesar de haberlo hecho bien.
// ! Es por que Jest no sabe que hacer con el import, por lo que no lo detecta.
// ? Por que Jest no puede leer el import, porque Jest funciona sobre Node JS,
// ? ya hay soporte parcial a los imports (tiene como 2 años que lo están agregando)
// ! No tiene soporte al 100%.

// * Lo que si soporta Node JS es common JS
// - Básicamente en lugar de export, utilizas module.export

// - En lugar de import from haces lo siguiente indicando de que archivo
// -| o dependencias estas tratando de importar:
// -- const suma = requiere('/archivo.js')

// !! Import no existe en Node JS como tal. Por lo tanto Jest tampoco sabe que hacer con el.

// ? Tenemos 2 opciones.

// - Importar como common JS (pero esto hará que ya no funcionen en el navegador 
// -|por que cambia la sintaxis).

// - La otra es crear diferentes variaciones de las funciones, es decir, que hagan lo mismo
// -| pero que una tenga la sintaxis de common JS y otra es la de import y exports

// ! Las 2 no son muy buenas opciones y requieren de mucho trabajo.

// ? Una tercera opción es habilitar algo llamado Babel.
// Babel te va a permitir que puedas escribir código, digamos, el más nuevo de versiones muy
// nuevas en JavaScript y te va a permitir llevarlo a una versión compilada o bien se le conoce
// como transpilada de una versión anterior.
// Por lo que puedes utilizar  la nueva sintaxis aunque no esté soportada porque al final va a
// presentar una versión transpilada que si va a soportar ese código.

// Por ejemplo: Un arrow function, Internet Explorer no lo soporta, pero puedes utilizar está 
// sintaxis, tanspilarlo con babel y te va a crear una versión en la que Internet Explorer si pueda leer.

// Con babel puedes utilizar todo lo nuevo para darle incluso soporte sobre un navegador muy viejo.