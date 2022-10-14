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


    //* Trabajando con fechas



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

console.log("HOLA");
$.datepicker.setDefaults($.datepicker.regional["es"]);

let d = new Date(2018, 12, 1, 10, 33, 30, 0);

console.log($.datepicker.formatDate('dd/M/yy', new Date()));
console.log($.datepicker.formatDate('dd/M/yy', d));
console.log($.datepicker.formatDate('dd/mm/yy', new Date()));
console.log($.datepicker.formatDate('dd-mm-yy', new Date()));
console.log($.datepicker.formatDate('yy-mm-dd', new Date()));
console.log($.datepicker.formatDate('mm', new Date()));
let m = $.datepicker.formatDate('mm', new Date());
console.log('Mes', m);
console.log($.datepicker.formatDate('dd/mm/yy', new Date(d)));

let f = new Date('13/10/2022');
console.log('--------------------------------------------------');
console.log('');

// let frecPago = "MENSUAL";
let frecPago = "QUINCENAL";

// Nomina
let bndInicSub = "0";
let bndRevolSemi = "2";

// Personal
// let bndInicSub = "0";
// let bndRevolSemi = "5";

// Revolvente
// let bndInicSub = "1";
// let bndRevolSemi = "2";

let fecha = calcFechPrimPag(bndInicSub,bndRevolSemi,frecPago);
console.log("La Fecha calculada es: " ,fecha);
function calcFechPrimPag(bndInicSub,bndRevolSemi,frecPago){

    let fechaPrimerPago = ""; // 2021-05-15
    let fecha = $.datepicker.formatDate('yy-mm-dd', new Date());
    let dia = $.datepicker.formatDate('dd', new Date());
    let mes = $.datepicker.formatDate('mm', new Date());
    let anio = $.datepicker.formatDate('yy', new Date());
    
     
    console.log('Fecha', fecha);
    console.log('Día', dia);
    console.log('Mes', mes);
    console.log('Año', anio);
    
    console.log('bndInicSub', bndInicSub);
    console.log('bndRevolSemi', bndRevolSemi);
    console.log('frecPago', frecPago);

    // Si no es revolvente entonces pasa
    if("1" === bndInicSub && "2" === bndRevolSemi){
        
        console.log("La oferta es de tipo Revolvente");
        
        // La fecha no es necesario enviarla.
        // fechaPrimerPago = fecha;

    } else {

            // Si es de Nomina.
            if("0" === bndInicSub && "2" === bndRevolSemi){

                if(frecPago == "MENSUAL"){
                    
                    console.log("MENSUAL-NOMINA");

                    // * TABLA MENSUAL-NOMINA
                    // - SI dia de disposición >= 1 &&  dia de disposición <= 9 entonces 15 de este Mes.
                    // - SI dia de disposición >= 10 &&  dia de disposición <= 31 entonces 15 de siguiente Mes.
                    if(parseInt(dia) >= 1 &&  parseInt(dia) <= 9) {

                        // let d = new Date(2018, 12, 1, 10, 33, 30, 0);
                        fecha = new Date(anio, (parseInt(mes) - 1), 15);
                        fechaPrimerPago = $.datepicker.formatDate('yy-mm-dd', new Date(fecha));
                        console.log(fechaPrimerPago);

                    } else if(parseInt(dia) >= 10 &&  parseInt(dia) <= 31){

                        fecha = new Date(anio, mes, 15);
                        fechaPrimerPago = $.datepicker.formatDate('yy-mm-dd', new Date(fecha));
                        console.log(fechaPrimerPago);
                    }
                    
                } else if(frecPago == "QUINCENAL"){
                    
                    console.log("QUINCENAL-NOMINA");

                    // * TABLA QUINCENAL-NOMINA
                    // - SI dia de disposición >= 1 &&  dia de disposición <= 9 entonces 15 de este Mes.
                    // - SI dia de disposición >= 10 &&  dia de disposición <= 25 entonces 30 de este Mes.
                    // - SI dia de disposición >= 26 &&  dia de disposición <= 31 entonces 15 de siguiente Mes.
                    if(parseInt(dia) >= 1 &&  parseInt(dia) <= 9) {

                        // let d = new Date(2018, 12, 1, 10, 33, 30, 0);
                        fecha = new Date(anio, (parseInt(mes) - 1), 15);
                        fechaPrimerPago = $.datepicker.formatDate('yy-mm-dd', new Date(fecha));
                        console.log(fechaPrimerPago);

                    } else if(parseInt(dia) >= 10 &&  parseInt(dia) <= 25){

                        fecha = new Date(anio, (parseInt(mes) - 1), 30);
                        fechaPrimerPago = $.datepicker.formatDate('yy-mm-dd', new Date(fecha));
                        console.log(fechaPrimerPago);
                    } else if(parseInt(dia) >= 26 &&  parseInt(dia) <= 31){

                        fecha = new Date(anio, mes, 15);
                        fechaPrimerPago = $.datepicker.formatDate('yy-mm-dd', new Date(fecha));
                        console.log(fechaPrimerPago);
                    }

                }
            
            // Si es Personal
            } else if("0" === bndInicSub && "5" === bndRevolSemi){


                if(frecPago == "MENSUAL"){

                    console.log("MENSUAL-PERSONAL");

                    // * TABLA MENSUAL-PERSONAL
                    // - SI dia de disposición >= 1 &&  dia de disposición <= 31 entonces 15 de siguiente Mes.
                    if(parseInt(dia) >= 1 &&  parseInt(dia) <= 31) {

                        // let d = new Date(2018, 12, 1, 10, 33, 30, 0);
                        fecha = new Date(anio, mes, 15);
                        fechaPrimerPago = $.datepicker.formatDate('yy-mm-dd', new Date(fecha));
                        console.log(fechaPrimerPago);

                    }

                } else if(frecPago == "QUINCENAL"){

                    console.log("QUINCENAL-PERSONAL");
                    // * TABLA QUINCENAL-NOMINA
                    // - SI dia de disposición >= 1 &&  dia de disposición <= 15 entonces 30 de este Mes.
                    // - SI dia de disposición >= 16 &&  dia de disposición <= 31 entonces 15 de siguiente Mes.
                    if(parseInt(dia) >= 1 &&  parseInt(dia) <= 15) {

                        // let d = new Date(2018, 12, 1, 10, 33, 30, 0);
                        fecha = new Date(anio, (parseInt(mes) - 1), 30);
                        fechaPrimerPago = $.datepicker.formatDate('yy-mm-dd', new Date(fecha));
                        console.log(fechaPrimerPago);

                    } else if(parseInt(dia) >= 16 &&  parseInt(dia) <= 31){

                        fecha = new Date(anio, mes, 15);
                        fechaPrimerPago = $.datepicker.formatDate('yy-mm-dd', new Date(fecha));
                        console.log(fechaPrimerPago);
                    }

                }

            }
    }

    return fechaPrimerPago;
}