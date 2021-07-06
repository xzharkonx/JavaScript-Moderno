
// * 201. Creando la base de datos

// ? Podemos escribir en la consola del modo desarrollador lo siguiente para
// ? ver todos los métodos que hay para IndexedDB.
// ?    - window.indexedDB

// # Variables

// ? Una vez que se cree la DB guardaremos el resultado de la creación aquí.
// ? Para tenerla globalmente en nuestros métodos.
let DB;


document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    // Se creará una función para crear los clientes
    setTimeout( () => {
        crearCliente();
    }, 5000 );
    // setInterval( () => {
    //     crearCliente();
    // }, 5000 );
})

function crmDB() {

    // # Crear base de datos version 1.0
    // ## - 1er argumento. Le pasaremos el nombre como String
    // ## - 2do argumento. La version.
    let crmDB = window.indexedDB.open('crm', 1);

    // ! Si hay un error.
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la BD');
        // !! Un error podría ser que el navegador no soporte indexedDB
    }

    // ? Si se creo bien.
    crmDB.onsuccess = function() {
        console.log('¡Base de datos Creada!');
        
        // ? Le asignamos el resultado de nuestra DB a una variable
        // ? para acceder a los datos de la DB desde cualquier funcion.
        DB = crmDB.result;
    }

    // ## Configuración de la base de datos.
    crmDB.onupgradeneeded = function (e) {
        
        // console.log('Este metodo se ejecuta una sola vez
        // cuando se crea la base de datos');
        // console.log(e.target.result); // Resultado del evento

        // Para tener la referencia de la base de datos.
        const db = e.target.result;

        // Definimos lo que se conoce como el objectStore, este va a 
        // interactuar con la DB
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm', // le indicamos a la clave el nombre de la base.
            autoIncrement: true // le indicamos un campo autoincrementable.
        })

        // Ahora utilizaremos el objectStore para darle configuraciones
        // a nuestra BD y nuestras columnas.

        // # Como es un "crm" es un administrador de clientes.
        // ## 1er argumento. Será el nombre de la columna.
        // ## 2do argumento. Será el keyPath, es como vamos a hacer referencia
        // ## - para consultar lo que es el campo de nombre.
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        // Otra columna pero con tipo de dato único
        objectStore.createIndex('email', 'email', { unique: true });
        // Otra columna pero sin tipo de dato único
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas');

        // ! Si ya hay una base de datos, habrá que borrarla de nuevo para hacer
        // ! estas configuraciones
    }


}

// Función para crear los clientes cada 5 Segundos.
function crearCliente(){
    
    // ? indexedDB funciona con transacciones.
    // ? Las transacciones son una serie de pasos que deben cumplirse
    // ? si o si, para llegar a un resultado.
    // ? A toda esa seríe de pasos y condiciones u comprobaciones que tienen 
    // ? que suceder para llegar a un resultado final se le conoce como transaccion.

    // ## 1er argumento. El nombre de la base de datos donde será la transación.
    // ## 2do argumento. El siguiente es el modo (en este caso el de escritura y lectura).
    // ##  - readwrite: Escritura y lectura.
    // ##  - readonly: Solo Lectura.
    let transaction = DB.transaction(['crm'], 'readwrite');
    
    // Transacción completada
    transaction.oncomplete = function() {
        console.log('Transacción completada');
    }
    // Error en la Transacción
    transaction.onerror = function() {
        console.log('Hubo un error en la transacción');
    }

    // ## Despues vamos a escribir un objeto en nuestra base de datos
    // ? Para ello vamos a utilizar el objectStore y le pasamos la transacción.
    const objectStore = transaction.objectStore('crm');

    // ## Creamos un nuevo Object Literal llamado cliente.
    // ? Miramos en referencia a las columnas que creamos en la BD.
    const nuevoCliente = {
        telefono: 7122302540,
        nombre: 'Luis',
        email: 'xzharkonx@gmail.com'
    }

    // ## Aquí utilizaremos los métodos para eliminar, para obtener o para agregar.
    // ? - Agregar: add()
    // ? - Actualizar: put()
    // ? - Eliminar: delete()
    const peticion = objectStore.add(nuevoCliente);
    
    console.log(peticion);

}