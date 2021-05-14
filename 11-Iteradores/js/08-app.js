
// # 85. for ...in
// ! Este itera sobre objetos
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'estudiar JavaScript'];

// ? Lo que hace este for es que cada ciclo va a asignar un indice del arreglo 
// ? pendientes a la variable pendiente.
// * Nos da los indices del arreglo.

for (let pendiente in pendientes){
    // * Clave del Array.
    console.log(pendiente);    
    // * Valor del Array.
    console.log(pendientes[pendiente]);    
}

console.log(`\n`);

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    moto: '6.0'
}

// ## Objetos reorridos con for in

// * Podemos ver que ahora muestra las keys/variables de ese objeto (pero no los valores).

for (let propiedad in automovil){
        console.log(propiedad);
}
    
console.log(`\n`);

// * Ahora si mostraremos los valores de ese objeto.
for (let propiedad in automovil){
    console.log(automovil[propiedad]);
}

console.log(`\n`);

// ## Objetos reorridos con for of

// !! Pero con of obtendremos un error.

// for (let propiedad of automovil){
//     console.log(propiedad);
// }

// * Actualización de EcmaScript7 
// ? Agregaron un iterador para Objetos que lo hace más sencillo
// * Lo haremos con un of

for( let [llave,valor] of Object.entries(automovil)){
    console.log(llave, valor);
}