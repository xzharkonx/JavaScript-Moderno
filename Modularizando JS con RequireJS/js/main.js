/*
 *@Autor: Luis Eduardo Garcia Mercado
 *@Fecha: 07/09/2022
 */

 // - Invocamos a la Librería require para acceder a los archivos
 // - con los cuales vamos a trabajar.
 require.config({
        // ? operaciones: (como esta en la raíz a nivel de main.js y 
        // ? solo se agrega el nombre). 
     paths: {
         // ? variable:ruta 
         'operaciones':'operaciones',
         'jquery':'lib/jquery' //? Este no esta en la raíz.
     }
 });

 // - Ahora implementamos la funciòn require para leer los scrips.
 // - O modúlos que hayamos creado como el de operaciones.
 
 // - A cada uno de ellos es como si se los pasaramos como parametros
 // - dentro de la función para poder trabajar con ellos. (jquery con $).
 
 require(['operaciones','jquery'], function(o, $){

    $('#btncalcular').on("click", function(){
        let num1 = parseFloat($('#num1').val());
        let num2 = parseFloat($('#num2').val());
        
        // ? Aquí importante cabe mencionar que el
        // ? parámetro 'o' representa el objeto del script operaciones
        // ? que a su vez trae consigo las funciones.
        
        $('#suma').text(o.sumar(num1,num2));
        $('#resta').text(o.restar(num1,num2));
        $('#multiplicacion').text(o.multiplicar(num1,num2));
        $('#division').text(o.dividir(num1,num2));
    });
    $('#op2').attr("selected","");
    if($('#op2').attr("selected")){
        $('#op2').removeAttr("selected");
        $('#op3').attr("selected","");
    }
    // ## Así se habrán modularizado nuestros archivos js utilizando require.js

 });

 // ? Todo el código que utilizabamos aquí abajo ahora lo colocamos
 // ? dentro del require para utilizar la modularización.
// $('#btncalcular').on("click", function(){
//     let num1 = parseFloat($('#num1').val());
//     let num2 = parseFloat($('#num2').val());
//     $('#suma').text(sumar(num1,num2));
//     $('#resta').text(restar(num1,num2));
//     $('#multiplicacion').text(multiplicar(num1,num2));
//     $('#division').text(dividir(num1,num2));
// });