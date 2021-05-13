
// # 37. Objetos dentro de Objetos

const producto = {
    nombre : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: { // ? Aquí creamos un objeto
        peso: '1Kg',
        medida: '1m'
    }, // ? Aquí creamos otro objeto
    fabricacion: {
        pais: 'China'
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
console.log(producto.fabricacion.pais);