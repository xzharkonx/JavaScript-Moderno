
// # 221. De Callback Hell a Promises

const paises = [];

// ! En este caso, solo ocuparemos resolve

// ? Utilizararemos una  Expresión de Función (Function Expression).
// ? de tipo Flecha que devolvera un Objeto de tipo promesa.
// ? En este caso pais viene a ser una parametro de esa función nuevoPais.

const nuevoPais = pais => new Promise( resolve => {

    // * 2do. Se ejecuta el promise con su contenido.
    setTimeout(() => {

        // * 3ro. Agregamos el país que le pasamos al arreglo de paises.
        paises.push(pais);

        // * 4to. Se define que aqui ya se habra cumplido la promesa y se le pasa el mensaje.
        resolve(`Agregado: ${pais}`);
    }, 3000);

})

// * 1ro. Se ejecuta la función pasandole el parametro
nuevoPais('Alemania')     // ! Función ejecutandose.
    .then(resultado => {  // ? Resibiendo el valor del resolve (el mensaje) de la promesa.

        console.log(resultado); // ? Mensaje del resolve (el str que le pasamos)
        console.log(paises);    // ? El arreglo de paises pero ya con un pais agregado.
        
        // paises.forEach(p=>console.log(p));

        // * 5to. Devolvemos la función otra vez con return para que se ejecute despues.
        return nuevoPais('Francia')
    })
    .then(resultado => { // ? Resibiendo el valor del resolve (el mensaje) de la promesa.
        
        console.log(resultado);
        console.log(paises); // ? El arreglo de paises pero ya con un pais agregado.

        // * 6to. Y así sucesivamente iremos agregando a partir de aquí...

        return nuevoPais('Inglaterra')
    })
    .then(resultado => { // ? Resibiendo el valor del resolve (el mensaje) de la promesa.

        console.log(resultado);
        console.log(paises); // ? El arreglo de paises pero ya con un pais agregado.

        // * 6to. Y así sucesivamente iremos agregando a partir de aquí...

        // return nuevoPais('Otro País...')
    })

    // .then(resultado => {});