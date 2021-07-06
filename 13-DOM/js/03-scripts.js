
// # 97. getElementById
// ? Solo selecciona un elemento y si hay varios id repetidos solo seleccionará el primero
// Trae directamente el nodo
const formulario = document.getElementById('formulario');
console.log(formulario);

// ! Cuando buscamos algo que no existe
const noExiste = document.getElementById('no-existe');
console.log(noExiste); // !! Nos retornará null