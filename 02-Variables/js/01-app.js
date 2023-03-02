
// # 11. Todo lo que debes saber de las variables var
// JavaScript es un lenguaje de tipo dinamico, no se especifíca el tipo de dato.
// var es una sintaxis antigua.

// Estas variables se pueden reeasignar.
var producto = "Monitor de 24 Pulgadas";
console.log(producto);

// mira que no importa si las encerramos con "" o con ''
producto = 'Monitor de 19 Pulgadas';
console.log(producto);

// ahora también le podríamos reasignar número y no habría ningún problema.
producto = 20;
console.log(producto);

// Se pueden incializar sin valor y asignarlo después
var disponible;
disponible = true;

disponible = false;

// Inicializar múltiples variables.
var categoria = 'Computadoras',
    marca = "Marca Famosa",
    calificación = 5;

// Las variables no pueden inicializar con numero.
// var 99dias; // !! Esto está mal.
var dias99; // * Esto está correcto.

// Si pueden iniciarse con un _
var _01;

// ## Estilos para iniciar variables con más de una palabra.
var nombreProducto; // ### CamelCase (Por la mayúscula en la segunda letra). Está es la más usada.
var nombre_producto_categoria_precio; // ### Snake/Serpiente o Underscott (por el guión bajo).
var NombreProducto // ### PascalCase (Está se aplica más en las Clases).