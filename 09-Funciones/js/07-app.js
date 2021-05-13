
// # 62. Como se Comunican las funciones

iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');

    segundaFuncion();
}


function segundaFuncion(){
    console.log('Desde la segunda función');

    usuarioAutenticado('Luis GM');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...')
    console.log(`Usuario autentcado exitosamente: ${usuario}`);
}