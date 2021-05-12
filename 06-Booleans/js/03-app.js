
// # 32. Buenas practicas a la hora de evaluar un Boolean

// * Error muy común:
// const autenticado = true;
const autenticado = false;

// if (autenticado === true){ // ? Esto es muy obvio, el de abajo hace lo mismo y es mejor.
if (autenticado){
    console.log('Si puedes ver netflix')
}else{
    console.log('No, no puedes verlo')
}

// ## Otra es un Operador ternario.
console.log(autenticado ? 'Si esta autenticado': 'No esta autenticado');
