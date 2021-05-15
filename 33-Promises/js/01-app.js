
// # 218. Ejemplo de Callbacks

// * Un Callback es bastante útil.
// ? Supongamos uqe estamos descargando un listado de clientes
// ? y en lo que yo estoy descargando los últimos 10 clientes
// ? que se agregue uno nuevo, en ese momento en el que estoy
// ? descargando y se agrega ese nuevo cliente no va a ser parte
// ? ya de la descarga,si no, por medio del Callbackse agrega.

const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

// * Callback, es decir, la función que se va a ejecutar
function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach((pais,i) => {
            console.log(`${i}: ` + pais);
        });
    }, 1000);
}

mostrarPaises();


// ? Al llamar a esta función, lo que haremos es,
// ? pasarle el nuevo país y luego pasarle la función
// ? que se ejecutará despues.
nuevoPais('Alemania', mostrarPaises);