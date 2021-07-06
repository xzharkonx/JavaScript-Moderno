// #  311. Pattern NameSpaces.
// Se usa en proyectos muy grandes para evitar el solapamiento, que unas variables y clases se confundan con otras.
// evita colision de nombres en el scope global
// Se crea un objeto global en el que dentro iran las funciones y objetos.
 
// * Se le dice Namespace porque sobre este Objeto se le van a 
// * ir colocando todos los datos, todas las funciones y operaciones.
const restaurantApp ={}  // En este objeto lo iremos llenando poco con propiedades y funciones
 
// ! le definimos una nueva propiedad
restaurantApp.platillos = [
    {
        nombre: 'croquetas',
        precio: 5
    },
    {
        nombre: 'calamares',
        precio: 7
    },
    {
        nombre: 'tortilla',
        precio: 9
    },
    {
        nombre: 'patatas',
        precio: 3
    }
];
 
// * Ahora agregamos otra propiedad que van a ser las funciones. 
restaurantApp.funciones = {
    mostrarMenu: (platillos) =>{
        console.log(`Bienvenidos al bar`);
        platillos.forEach((platillo, index) => {
            console.log(`${index}: Nombre: ${platillo.nombre}  Precio: ${platillo.precio}`)
        });
    }, // Insertamos otra funcion.
    ordenar: id =>{
        console.log(`Has elegido el platillo ${restaurantApp.platillos[id].nombre} oido cocina!!!!`);
    },
 
    agregarplatillo: (nombre, precio) =>{
        const nuevoplatillo = {
            nombre,
            precio
        }
        restaurantApp.platillos.push(nuevoplatillo);
    }
    
}
 
 
// ## Todo queda en el Namespace
//  ? Lo que hará que nuestras variables no chocquen con otras.
// llamamos a la segunda funcion dandole como parametro su id
restaurantApp.funciones.ordenar(2);
 
// Llamamos a la funcion de agregar un nuevo platillo.
restaurantApp.funciones.agregarplatillo('pinchos morunos', 10);
 
const {platillos} = restaurantApp;
 
// Ahora para llamar a la funcion tenemos que hacerlo desde restaurantApp. Evitando que choque con el nombre de otra funcion.
restaurantApp.funciones.mostrarMenu(platillos);