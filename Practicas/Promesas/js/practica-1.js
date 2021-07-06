
// # "2 Promises ciclados"

const union = fn => new Promise((resolve, reject) => {

    const v = true;

    if (v) {
        resolve(`Es verdadero`)
    } else {
        reject(`Es falso`);
    }

    // Se va a ciclar
    // fn(fn)
    //     .then(respuesta => console.log(respuesta))
    //     .catch(error => console.log(error)) 


});


async function app () {

    union(union)
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error))

}

app();