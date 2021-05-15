
// # 193. Iteradores en JavaScript.

// * Existen muchos nuevos.

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();
datos.set('nombre', 'luis');
datos.set('profesión', 'Desarrollador Web');

console.log('\n Entries Iterator');

// ## Entries Iterador
// * utilizaremos .entries()
// ? Nos mostrará tanto llave como valor de todos los elementos.

// * Iteramos sobre ciudades
for(let entry of ciudades.entries()){
    console.log(entry); // ? Array de clave y valor. [0, 'Londres']
}
// * Iteramos sobre ordenes
for(let entry of ordenes.entries()){ // ? [123, 123]
    console.log(entry); // ? Array de clave y valor (serán iguales para Set).
}
// * Iteramos sobre datos
for(let entry of datos.entries()){
    console.log(entry); // ? Array de clave y valor. ["nombre", "luis"]
}

// ! Será el mismo resultado

console.log('\n Values Iterator');

// ## Values Iterador
// * utilizaremos .values()
// ? Nos mostrará el valor de todos los elementos.

// * Iteramos sobre ciudades
for( let value of ciudades.values()){
    console.log(value);
}

// * Iteramos sobre ordenes
for( let value of ordenes.values()){
    console.log(value);
}

// * Iteramos sobre datos
for( let value of datos.values()){
    console.log(value);
}


console.log('\n Keys Iterator');

// ## Keys Iterador
// * utilizaremos .keys()
// ? Nos mostrará el indice/clave de todos los elementos.

// * Iteramos sobre ciudades
for( let keys of ciudades.keys()){
    console.log(keys);
}

// * Iteramos sobre ordenes
for( let keys of ordenes.keys()){
    console.log(keys); // ? Se igualan los valores a los indices/claves.
}

// * Iteramos sobre datos
for( let keys of datos.keys()){
    console.log(keys);
}

console.log('\n Valores por Default');

// ## Default
// * Se mostrarán los valores por default para estás propiedades.

// * Iteramos sobre ciudades
for( let ciudad of ciudades){
    console.log(ciudad); // ? Imprime los valores
}

// * Iteramos sobre ordenes
for( let orden of ordenes){
    console.log(orden); // ? Imprime los valores
}

// * Iteramos sobre datos
for( let dato of datos){
    console.log(dato); // ? Imprime los las claves y los valores.
}