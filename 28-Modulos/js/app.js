
// # 194. Básicos de los Modulos en ES6.

// ! Muy importante: Cuando comienzas a agregar muchos archivos el proyecto
// ! comienza a crecer se puede mezclar el código.

// ? La forma en que se puede solucionar es colocandolo dentro de un IIFE o
// ? más bien una función que se ejecuta inmediatamente
// ? Este tipo de funciones mantiene localmente las variables y el contenido dentro de esta.

// console.log(nombreCliente); //Dará error porque la variable se encuentra dentro de la función anónima.

// ## Importamos la variable

// ? Importamos solo la variable del archivo cliente.js dentro de la misma carpeta con ./
// ! Tenemos que agregar a la etiqueta de js en el HTML el atributo de type="module"

// ? Podemos escribir la invocación o declaración de la variable y en automático se agregara
// ? dentro de los {}.

// # 195. Exportar e Importar Funciones.
// ? Agregamos el nombre de la función a importar: mostrarInformacion

// # 196. Exportar e Importar una Clase.
// ? Agregamos el nombre de la Clase a importar: Cliente

// # 199. El export Default y alias a los imports.
// ?  - Agregamos el nombre de la función a importar antes de los corchetes.
// ?  - En este caso será nuevaFuncion porque se definio como default.
// !! - Si la colocas la defult dentro de los corchetes marcará un error.
// ?  - Podemos incluso cambiar el nombre de la variable con el que la importamos porque ya tiene
// ?    un alias por default.
// ! - Se le puede poner un alias a las variables que se importan de forma normal con "as" 
// !   y el nombre del alias que queramos.

import nuevaFuncion, { nombreCliente as nombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js'

// # 197. Heredar una clase que esta siendo importada.
// * Agregamos el nombre de la Clase Heredada a importar: Empresa

import { Empresa } from './empresa.js';

// * Importando variables
console.log(nombre);
console.log(ahorro);


// * Importando Funciones
console.log(mostrarInformacion(nombre, ahorro));
tieneSaldo(ahorro);


// * Importando Clases
const cliente = new Cliente(nombre,ahorro);
console.log(cliente);
cliente.saludo();
cliente.elementos();
console.log(cliente.mostrarInformacion());

// * Importando una Clase de Herencia
const empresa = new Empresa('Systemwoork', 100, 'Desarrollo de Sistemas, Web y Móvil');
console.log(empresa);
console.log(empresa.mostrarInformacion());
empresa.saludo();

// * Ejecutando una función default
nuevaFuncion();