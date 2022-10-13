/*
 *@Autor: Luis Eduardo Garcia Mercado
 *@Fecha: 07/09/2022
 */

// # Ahora crearemos un modúlo nombrado con la ayuda de require.js.
// - La función recibe por primer parámetro el nombre del modúlo,
// - y si no, recibe el nombre del archivo (operaciones)

// - Este modúlo va a retornar un Objeto o una Variable que será utilizada
// - como la instancia de este modulo.
define([], function(){

    return {

        sumar: function sumar(num1, num2){
            return num1+num2;
        },
        restar: function restar(num1, num2){
            return num1-num2;
        },
        multiplicar: function multiplicar(num1, num2){
            return num1*num2;
        },
        dividir: function dividir(num1, num2){
            return num1/num2;
        }

    }

});

// - Funciones que podrían utilizarse normalmente
// - pero que omitimos para que se utilicen de forma modular.
// function sumar(num1, num2){
//     return num1+num2;
// }
// function restar(num1, num2){
//     return num1-num2;
// }
// function multiplicar(num1, num2){
//     return num1*num2;
// }
// function dividir(num1, num2){
//     return num1/num2;
// }
