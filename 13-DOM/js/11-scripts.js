
// # 105. Un Ejemplo más avanzado de lo que podemos hacer con JS

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// ## Bóton que ejecutará un evento

// ? Primer argumento esperará el tipo de evento, en nuestro caso será un click
// ? El segundo argumento viene a ser una función o una función anónima pero se declarán como un arow function.

// ? Esta forma funciona
// btnFlotante.addEventListener('click', () => {
//         console.log('Diste clic en el botón');
//     });

btnFlotante.addEventListener('click', mostrarOcultarFooter);

// ! Está línea así declarada no servirá para el caso de las arrow functions
// ! Tiene que ser declarada como function.
// const mostrarOcultarFooter2 = () => console.log('Diste clic en el botón');


// ? Le colocamos un efecto de transición
btnFlotante.style.transition = '3s ease';


// ? Recordando algunos ejemplos de funciones-----------------------------------------------
const f = () => 1+2;
console.log(f());

const msg = () => console.log('Hola mundo');
msg();

// ? -----------------------------------------------Recordando algunos ejemplos de funciones

function mostrarOcultarFooter(){
    console.log('Diste clic en el botón');
    // Al footer le agregaremos la clase de activo que adquiera ese estilo con css y así
    // se pueda ver, el problema es que una vez activado no se podrá desactivar
    // footer.classList.add('activo');
    
    // ? Para ello mejor utilizaremos la función .toggle que lo que hará será que cada vez que
    // ? uno haga clic en el botón quite o ponga esa clase.
    
    // footer.classList.toggle('activo');
    // btnFlotante.classList.toggle('activo');
    
    // ? O también podríamos verificarlo utilizando un if
    // ? utilizaremos el método .contains() lo que permitira 
    // ? verificar si un elemento tiene o no tiene una clase
    
    if(footer.classList.contains('activo')){
        // Si tiene esa clase entonces... hay que quitarla
        
        // ? Removemos la clase
        // footer.classList.remove('activo');
        footer.classList.remove('activo');
        
        // ! Cambiará el color del botón a desactivado
        // btnFlotante.classList.remove('activo'); // !! Este no serviría para este caso.
        
        // ? Con this hacemos referencia al botón que lo activo
        this.classList.remove('activo'); 
        
        // ? Cambiamos el contenido del botón.
        this.textContent = 'Idioma y Moneda';

    }else{
        // Si no tiene esa clase activo entonces... hay que ponerla
        footer.classList.add('activo');
        
        // ! Cambiará el color del botón a activo
        // btnFlotante.classList.add('activo'); // !! Este no serviría para este caso.

        // ? Con this hacemos referencia al botón que lo activo
        this.classList.add('activo'); 
        
        // ? Cambiamos el contenido del botón.
        this.textContent = 'X Cerrar';

    }

}


