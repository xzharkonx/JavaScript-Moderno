
// # 194. Básicos de los Modulos en ES6.

// ! Muy importante: Cuando comienzas a agregar muchos archivos el proyecto
// ! comienza a crecer se puede mezclar el código.

// ? La forma en que se puede solucionar es colocandolo dentro de un IIFE o
// ? más bien una función que se ejecuta inmediatamente

// * Funcion local
// ? Este tipo de funciones mantiene localmente las variables y el contenido dentro de esta.
(function(){
    console.log('Desde un IIFE');
    
    // const nombreCliente = 'Luis';
    // console.log(nombreCliente); // Luis

    // * Variable pero en un ambito global.
    // ? Nos servirá para mandar valores fuera de está función.
    // window.nombreCliente = 'Luis';

})(); // Este último parentesis es el que manda a llamar la función.

// ## Enviar variables a otro archivo

// * Utilizamos la palabra reservada export
// ? Tenemos que agregar a la etiqueta de js en el HTML el atributo de type="module"
// ? Sin embargo podemos no importarlos desde el HTLM, así que eliminamos la etiqueta de:
/* <script src="js/cliente.js" type="module"></script> */
// ! Porque llamaremos esa variable en otro archivo con import (revisa app.js)
export const nombreCliente = 'Luis';

export const ahorro = 200;



// # 195. Exportar e Importar Funciones.

export function mostrarInformacion(nombre, ahorro){
    return `Cliente ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0) {
        console.log('Si tiene saldo');
    }else {
        console.log('El Cliente no tiene saldo');
    }
}


// # 196. Exportar e Importar una Clase.

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
        this.saludo = () => console.log( 'Hola =D' );
        this.elementos = () => console.log(`nombre: ${this.nombre}, ahorro: ${this.ahorro}`);
    }

    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro: ${this.ahorro}`;
    }

}



// # 198. El Export Default y alias a los imports
// ? Se le antepone a lo que vayamos a exportar la palabra default.
// ! No puedes tener 2 export default, solamente puedes tener 1.
// ? Puede incluso tener o no nombre está function.

// export default function nuevaFuncion(){
export default function(){
    console.log('Este es el export default');
}

