
// # 265. Async Await hacia una API con Fetch

const url = `https://picsum.photos/list`;

document.addEventListener('DOMContentLoaded', obtenerDatos);

// ## Promises

// function obtenerDatos() {
    
//     fetch(url)
//         .then(respuesta =>respuesta.json())
//         .then(resultado => console.log(resultado))
//         .catch(error => console.log(error));

//         // Veremos que nos aparecen los resultados
// }

// ## Async Await
// ? La cantidad de codigo es menor
// ? de no ser por el trycatch para capturar el error.

async function obtenerDatos() {
    
    try {
        // ? El valor se almacenará en la variable respuesta
        // ? Será el Objeto de la Promesa con la información.
        const respuesta  = await fetch(url); 
        
        // * Le decimos como queremos la respuesta
        
        // ! Ponemos doble await porque la primera línea
        // ! va a bloquear la siguiente, porque lo hace.
        
        // ? Porque en base a la respuesta es lo que va a
        // ? ejecutar la siguiente línea.

        // ! No podemos decirle que lo haremos con 
        // ! promise.all() porque haría que ambas líneas
        // ! se ejecuten al mismo tiempo.
        // !! No puedo decirle de que tipo será la respuesta
        // !! si aún no la tengo.

        const resultado = await respuesta.json();

        // * Finalmente mostramos el resultado
        console.log(resultado);

    } catch (error) {

        // !! En caso de error, muestralo.
        console.log(error);

    }
}

// * Observaciones

// ? - La sintaxis del async await hacia una API con Fetch
// ?   es muy común, en react js para consumir apis y mostrarlas.
// ? - También en culquier Framework o librería coo Vue Js o Angular.


