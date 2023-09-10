
//  # 220. Creando un Promise y .then y .catch

// * Con Promise tenemos acceso a 2 parametros.
// ? resolve: eso es lo que se va a ejecutar cuando
// ?          el promise se ejecuta correctamente o
// ?          cuando se cumpla el promise.
// ?          Esta función devolverá lo que le pasemos.
// ! reject: Cuando tenemos un error en el promise.
// !         Esta función devolverá lo que le pasemos.

// ## Creando el promise
// ? Devolvera un Objeto de tipo Promise
const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;
    // const descuento = false;

    if (descuento) {

        // ? El promise se cumplio.
        resolve('Descuento Aplicado');

    } else {
        
        // ! El promise no se cumplio.
        reject('No se pudo aplicar el descuento');
        
    }

})

// ? Con resolve o reject mandas datos (str,[],Object,int,...)
// ? y los resives con .then o .catch

// ## Utilizando el promise

console.log(aplicarDescuento);
console.log(typeof aplicarDescuento);

// ? Llamamos a la variable del Promise.
// ? Básicamente lo que dice es, vamos a utilizar aplicar descuento.
// ? Y con .then() que sería: entonces, que sería la acción que va a 
// ? pasar una vez que se realiza el promise.
// ! En caso de error, tenemos este método catch.
// Acomodamos el codigo de está manera (opcional).
aplicarDescuento
    .then( mensaje => descuento(mensaje)) // Aquí se ocupa una fn como ejemp.
    .catch( error => console.log(error)); // Aquí es lo mismo de arriba pero sin fn.

// * Creamos una función para el descuento que esta en el promise
const descuento = mensaje => console.log(mensaje);

// ? Resibirán el mensaje que le pasamos en la variable.




// ## Hay 3 valores posibles.
// ?  1.- Promesa cumplida: fulfilled.
// !! 2.- Promesa incumplida: reject.
// !  3.- Promesa pendiente: pending. Cuando la promesa está vacia.
// !                                  Aún no sabe el promise si se va a
// !                                  cumplir o no.



// Ejemplo de animalitos

const jaulaHervivoros = [];
const jaulaCarnivoros = [];
let hervivoro = 0;
let carnivoro = 0;

const agregarAnimal = animal => new Promise(resolve => {

    switch(animal.tipo){

        case 'Hervivoro':
            jaulaHervivoros.push(animal);
            hervivoro = jaulaHervivoros.length;
            resolve(`Animal Hervivoro agregado: ${animal.nombre}.`);
            break
        case 'Carnivoro':
            jaulaCarnivoros.push(animal);
            carnivoro = jaulaCarnivoros.length;
            resolve(`Animal Carnivoro agregado: ${animal.nombre}.`);
            break
        default:
            resolve(`Animal "${animal.tipo}" dejado en libertad: ${animal.nombre}.`);
        
    }

});

agregarAnimal({nombre:'Vaca',tipo:'Hervivoro'})
    .then(animal => {
        console.log(animal);
        console.log(`Hervivoros [${hervivoro}] & Carnivoros [${carnivoro}]`);
        return agregarAnimal({nombre:'Perro',tipo:'Carnivoro'});
    })
    .then(animal => {
        console.log(animal);
        console.log(`Hervivoros [${hervivoro}] & Carnivoros [${carnivoro}]`);
        return agregarAnimal({nombre:'Panda',tipo:'Obnivoro'});
    })
    .then(animal => {
        console.log(animal);
        console.log(`Hervivoros [${hervivoro}] & Carnivoros [${carnivoro}]`);
        return agregarAnimal({nombre:'Caballo',tipo:'Hervivoro'});
    })
    .then(animal => {
        console.log(animal);
        console.log(`Hervivoros [${hervivoro}] & Carnivoros [${carnivoro}]`);
        // return agregarAnimal({nombre:'Caballo',tipo:'Hervivoro'});
        console.log(jaulaCarnivoros);
        console.log(jaulaHervivoros);
    })