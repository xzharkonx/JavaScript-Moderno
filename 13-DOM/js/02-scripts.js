
// # 96. getElementsByClassName

// * Seleccionar elementos por su Clase....

// Seleccionamos elementos en base a una clase repetida
// ? Siempre será un array porque lleva Elements con -s
const header = document.getElementsByClassName('header');

// Seleccionamos el primer elemento y también el contenido de su texto
headerText = header[0].textContent; 

console.log(header);
console.log(headerText);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// ? Si las Clases existen más de 1 vez

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores); // Nos dará un array con los nodos que tengan esa clase

// ? Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste); 
// ! No marcará un error ni nada, simplemente nos imprimira un html vacio
