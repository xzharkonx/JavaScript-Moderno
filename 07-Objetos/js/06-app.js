
// # 38. Destructuring de Objetos Anidados.

const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: { // Aquí creamos un objeto
        detalles: ["Marca", "Modelo"],
        medidas:{ // Aquí creamos otro objeto dentro del objeto anterior

            peso: '1Kg',
            medida: '1m'
        }, // Aquí creamos otro objeto
        fabricacion: {
            pais: 'China'
        }
    }
        
}

// ## Forma normal de destructurar actual.
// const { nombre } = producto;
// console.log(nombre);

// ## Destruturación de una variable de un objeto interno

// ### Acceder al objeto
// const { nombre, informacion } = producto;
// console.log(nombre, informacion);

// ### Acceder a los valores dentro del objeto
// const { nombre, informacion: { medidas: {medida} } } = producto;
// !! De esta manera no creará la variable informacion
// console.log(nombre, informacion);
// ! lo que hará será crear la variable medida
// console.log(nombre, medida);

// ### Acceder a los valores dentro de un objeto interno.
const { nombre, informacion, informacion: { detalles }, informacion: { fabricacion: { pais } } } = producto;
// const { nombre, informacion, informacion: { peso, medida } } = producto;
console.log(nombre);
// Traemos el objeto informacion que esta dentro del objeto producto.
console.log(informacion);
// Traemos el array que esta dentro del objeto producto.
console.log(detalles);
// Traemos el atributo pais que esta dentro de los objetos de informacion y luego de fabricacion.
console.log(pais);


