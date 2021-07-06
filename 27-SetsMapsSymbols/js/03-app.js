
// # 188. Que son los Maps.

// - Son listas ordenadas en llave y valor,
// - Son como un Objeto pero de una sola propiedad, es decir,
// -| una llave y un valor.
// - La llave y el valor pede ser cualquier tipo de dato.
// - Los Maps tienen mejor performance que un Objeto.
// - Son especialmente diseñados para agregar o quitar elementos o para
// -| recorrerlos.
// - Si trabajas con Agregar o Quitar Elementos, un map tendrá mayor 
// -| performance que un Objeto.

// * Creando un Map
const cliente = new Map();

// * Otra forma de crear Maps
// const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);
const paciente = new Map([
                            ['nombre', 'paciente'],
                            ['cuarto', 'no definido']
                        ]);
paciente.set('dr', 'Dr Asignado');

// * Sobreescribiendo valores, le pasaremos una llave (key) que ya este y ese valor cambiará.
paciente.set('nombre', 'Antonio')

console.log(paciente);

// * Limpia los datos del Map
cliente.clear();

// * Agregando datos al Map
// ?  Llave, Valor.
cliente.set('nombre','Karen');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);

console.log(cliente);

// * Eliminar un elemento del Map con .delete
// carrito.delete('nombre'); 
// ? Se puede eliminar así, o:
// ? Si lo elimina dará true si no dará false.
// console.log(cliente.delete('nombre'));


// * Saber la longitud del Map con: .size
console.log(cliente.size);

// * Comprobar si tiene una llave con .has()
// ? Si lo encuentra dará true si no dará false.
console.log(cliente.has('nombre')); // true
console.log(cliente.has('Guitarra')); // false

// * Comprobar si tiene un valor con .get()
// ? Si lo encuentra regresará el valor si no dará undefined.
console.log(cliente.get('nombre')); // Karen
console.log(cliente.get('Guitarra')); // undefined

// * Iterando un Map.

paciente.forEach( (datos,index) => {
    // ? Clave:
    console.log(index);
    // ? Valor:
    console.log(datos);
})