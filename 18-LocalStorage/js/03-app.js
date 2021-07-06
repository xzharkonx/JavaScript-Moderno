
// * 143. Eliminar y Actualizar elementos de LocalStorage

localStorage.removeItem('persona');

// ? Actualizar un registro
// !! Debes obtener los datos y luego especificar lo que deseas actualizar y luego
// !! volverlo a guardar.
const mesesArray = localStorage.getItem('meses');
const meses = JSON.parse(mesesArray);

// ? Especificamos que queremos actualizar el arreglo agregandole un mes más
meses.push('Abril');

// ! No se puede reasignar messesArray porque es de tipo const.
// ! Se tendría que crear otra variable o bien hacer lo de abajo.
// mesesArray = JSON.stringify(meses);
// localStorage.setItem('meses', mesesArray);

// !! Lo mandamos directo y si revisamos en la consola del navegador se habrá agregado
// !! en el localStorage
localStorage.setItem('meses', JSON.stringify(meses));

// ? Eliminamos toda la información del localStorage
// localStorage.clear();