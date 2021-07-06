
// # 284. Closures

// ? Los closures vienen acompañados de algo que se le
// ? conoce como Scope.

// Por ejemplo:

const c = 'Luis';

function mostrarCliente(){
    const c = 'Eduardo';
    // console.log(c);
}

// Mostramos los resultados y veremos que aparece 
// Eduardo
mostrarCliente();

// ? Eso es el Scope
// ? La función toma el valor de la variable dentro 
// ? de ella.

// ? Pero en ocaciones queremos que la variable que se
// ? encuentra dentro de esa función queremos tenerla
// ? por fuera de la función.
// * Eso es lo que se conoce como Closure.

// ? Los closures son creados cada vez que se crea una 
// ? función. Y un closure es una forma de acceder a una
// ? función o valor desde el exterior.

// Si aquí imprimimos cliente, nos mostrará Luis.
// Esto es gracias al Scope.
// console.log(c);

// * Veamos como son los Closures
// ? Creamos la función cliente con una variable nombre.
const obtenerCliente = () => {

    const nombre = "Luis";

    // ? También agregaremos está función con la que
    // ? retornaremos el valor dentro de está función.
    function muestraNombre(){
        console.log(nombre);
        // return nombre // ! En caso de retornarla.
    }

    // ? Aquí se retornará la función
    // ? que mostrará el nombre.
    return muestraNombre;
}

// ? Aquí obtenemos la función muestraNombre()
const cliente = obtenerCliente();

// ? Volvemos a ejecutar para traer la información 
// ? del cliente que está dentro de esa función.
cliente();
// const nombre = cliente(); // ! En caso de retornarla.