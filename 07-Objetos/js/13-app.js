
// # 45. Object .keys, .values y .entries

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// ? Con .keys nos devolverá un arreglo con los keys del objeto (variables)
console.log( Object.keys( producto ) );

// ? Con .values, nos retornará un arreglo con los valores.
console.log( Object.values( producto ));

// ? Con .entries, nos retornará un arreglo con todo lo que contenga (un array que contiene, 
// ? por cada posición otro array con clave y valor de cada atributo). 
console.log( Object.entries( producto ));

// Recorriendo los valores directamente del objeto.
Object.values(producto).forEach(element => console.log(element));
// Recorriendo las claves y los valores directamente del objeto.
Object.entries(producto).forEach(element => element.forEach(values => console.log(values)));