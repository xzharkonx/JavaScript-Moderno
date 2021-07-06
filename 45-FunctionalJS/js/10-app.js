
// # 286. Composition

// En JavaScript es graciosa la historia de las clases 
// porque, todo le mundo decía que JavaScript no es un
// lenguaje serio porque no tiene clases, despues
// agregaron las clases y despues todo mundo dijo, no, 
// mejor hay que utilizar funciones.

// * Composition viene a ser una alternativa a las clases.

// ? Composition es básicamente escribir muchas funciones
// ? e ir utilizando en tus objetos lo que creas que vas
// ? a necesitar.

function Cliente(nombre, email, empresa) {

    // ? En Composition se utiliza la siguiente sintaxis.
    // ! Este viene a ser como el constructor
    let info = {
        nombre,
        email,
        empresa
    }

    // ? Por lo tanto la forma en que podemos escribir 
    // ? estas funciones y agregarlas a mis objetos es
    // ? retornando de la siguiente forma:
    
    // ? Como es una función, le pasamos lo que deseo
    // ? copiar, en este caso sería el Objeto info.

    // ! ¿Que es lo que hace Object.assign()
    // ? Toma una función y la copia hacia adentro de
    // ? este Objeto en este caso este mismo de Cliente.
    return Object.assign(
        info,
        // También el la función.
        obtenerNombre(info),

        // ! Aquí se le irán pasando las funciones que
        // ! querramos colocarle al objeto.

        guardarEmail(info), // ? Para agregar email.
        obtenerEmail(info), // ? Para mostrar email.
        obtenerEmpresa(info), // ? Para mostrar la empresa.
    )
}

function Empleado(nombre, email, puesto){
    
    // ? En Composition se utiliza la siguiente sintaxis.
    let info = {
        nombre,
        email,
        puesto
    }

    // ? Mira que aquí estamos reutilizando
    // ? y solo sobre lo que necesitamos
    return Object.assign(
        info,
        // También el la función.
        obtenerNombre(info),

        // ! Aquí se le irán pasando las funciones que
        // ! querramos colocarle al objeto.

        guardarEmail(info), // ? Para agregar email.
        obtenerEmail(info), // ? Para mostrar email.
        obtenerPuesto(info), // ? Para mostrar el puesto.
    )
}

// ? Entonces Composition se utiliza cuando tienes
// ? funcines que se pueden compartir entre objetos.
// ! Nota como Cliente toma nombre y email, Empleado
// ! también pero cada uno tiene una empresa y puesto
// ! diferente.
// ? De eso trata compositión. Escribes una función que
// ? puedes tulizar en diferentes objetos y se los vas 
// ? asignando para que puedas utilizarla en lugar de 
// ? crear una nueva clase y heradar, vas creando funciones
// ? que tu mismo vas armando.


// * Supongamos que queremos tener una función para obtener
// * el nombre
// ? Se coloca en el arrow function entre parentesis
// ? porque es una función dentro de esa otra función.
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})


// * Otra función para el Email
// ? Estamos creando una función que va a tomar un email
// ? se va a asignar dentro del objeto que tiene la 
// ? información de cliente o de empleado
const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando Email: ${info.nombre}`)
        info.email = email;
    }
})

// * Función para mostrar el email
const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
})

// * Función solo para el cliente
const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})

// * Función solo para el empleado
const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
})

// const cliente = Cliente('Luis', 'correo@correo.com', 'systemwwoork');
const cliente = Cliente('Luis', null, 'systemwwoork');

// * Invocamos la función
// ? Nota como es la función que esta dentro del todo
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log("=================================")

// const empleado = Empleado('Eduardo', 'empleado@empleado.com', 'FullStack');
const empleado = Empleado('Eduardo', null, 'FullStack');
// * Invocamos la función
// ? Nota como es la función que esta dentro del todo
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();


// ### Forma normal en que haríamos el codigo.
console.log("======= FORMA NORMAL (revisar codigo) ========")

let information = {
    nombre : "Luis Eduardo",
    email : "correo@correo.com",
    puesto : "Developer"
}

obtenerNombre(information).mostrarNombre();
obtenerEmail(information).mostrarEmail();
obtenerPuesto(information).mostrarPuesto();


// * Función solo para el empleado
const obtenerTodo = info => ({
    
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    },
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }

    // ! Y así irias agregando más funciones debajo.
})

obtenerTodo(information).mostrarNombre();
obtenerTodo(information).mostrarPuesto();
const infoRequerida = obtenerTodo(information);
infoRequerida.mostrarNombre();
infoRequerida.mostrarPuesto();

// ? Primero retornará una función que esta la ejcutamos.
console.log(typeof obtenerTodo); // Función
console.log(typeof obtenerTodo(information)); // Objeto

// ? y al ejecutarla nos devolverá un objeto con el cuál ejecutamos
// ? cualquier función dentro de el.

// ## Otros ejemplos


// ! Todo esto es una función
// hola => { console.log(hola)};

// ### Ejemplo Clásico 
// ? En esta opcion SI podemos definir variables adentro
// ? porque es la implementación de la función.
const saludo = hola => { console.log(hola)};
console.log(typeof saludo); // Tenemos una Función.
saludo("Luis"); // Luis

// ### Ejemplo de Composition
// !! En esta opcion NO podemos definir variables adentro
// ? Porque es como si se implementará una función pasandole un Object Literal
// ! Es como si tuvieramos un Object Literal
const despedida = adios => ({ despedir: adios,});
console.log(typeof despedida); // Tenemos una Función.
console.log(despedida("Luis").despedir); // Luis