
// * 132. Primeros Pasos con el Proyecto.

// # Variables
const resultado = document.querySelector('#resultado'); // Apunta a la caja de contenido de información.

const year = document.querySelector('#year'); // Apunta al Select del buscador por años para llenarlo.

const marca = document.querySelector('#marca'); // Apunta al Select del buscador por marca para obtener la info.
const minimo = document.querySelector('#minimo'); // Apunta al Select del buscador por minimo para obtener la info.
const maximo = document.querySelector('#maximo'); // Apunta al Select del buscador por minimo para obtener la info.
const puertas = document.querySelector('#puertas'); // Apunta al Select del buscador por minimo para obtener la info.
const transmision = document.querySelector('#transmision'); // Apunta al Select del buscador por minimo para obtener la info.
const color = document.querySelector('#color'); // Apunta al Select del buscador por minimo para obtener la info.


// ## Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


// ## Trae el año actual o el máximo.
const max = new Date().getFullYear();
const min = max - 10;
// console.log(max);
// console.log(min);

// # Eventos
document.addEventListener('DOMContentLoaded', () => {
    // ## Muestra los automoviles al cargar
    mostrarAutos(autos);

    // ## Llena las opciones de años
    llenarSelect();
});


    // ## Event listener para los select de búsqueda
    // ? Cuando cambie el select "change" le asignará ese valor
    // ? en el Objeto datosBusqueda para filtrar con el nuestra
    // ? lista de Objetos en el archivo db.js

    // ? También realizará el filtro lo que cambiará la lista de autos
    // ? mostrada en los resultados.
    
    marca.addEventListener('change', e => {
        // console.log(e.target.value);
        datosBusqueda.marca = e.target.value;
        // console.log(datosBusqueda);
        // Función para filtrar los resultados
        filtrarAuto();
    });
    year.addEventListener('change', e => {
        // Transformamos a entero los datos de año
        // que obtenemos en del usuario por medio
        // de la interfaz
        datosBusqueda.year =parseInt(e.target.value);
        filtrarAuto();
    });
    minimo.addEventListener('change', e => {
        datosBusqueda.minimo = parseInt(e.target.value);
        filtrarAuto();
    });
    maximo.addEventListener('change', e => {
        datosBusqueda.maximo = parseInt(e.target.value);
        filtrarAuto();  
    });
    puertas.addEventListener('change', e => {
        datosBusqueda.puertas = parseInt(e.target.value);
        filtrarAuto();  
    });
    transmision.addEventListener('change', e => {
        datosBusqueda.transmision = e.target.value;
        filtrarAuto();  
    });
    color.addEventListener('change', e => {
        datosBusqueda.color = e.target.value;
        filtrarAuto();  
    });


// # Funciones
function mostrarAutos(autos){
    // ## Elimina el HTML previo
    limpiarHTML();

    autos.forEach( auto => {
        const autoHTML = document.createElement('P');
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $
            ${precio} - Color: ${color}
        `;
        autoHTML.style.borderBottom = 'solid 4px crimson'

        // insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

// # Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

// # Genera los años del select
function llenarSelect(){
    
    // ## Agrega todas las fechas de los autos al Select
    // autos.forEach( auto => {
    //     const option = document.createElement('option');
    //     option.value = `${auto.year}`;
    //     option.textContent = `${auto.year}`;
    //     year.appendChild(option);
    // });

    
    // !! Pero la agencia no quiere mostrar autos con más de 10 años de antiguedad, entonces
    // !! mostraremos desde el año actual [max] hasta el más antiguo (menos 10 años de antiguedad [min]).
    for(let i = max; i>=min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }

}

// # Función que filtra en base a la búsqueda

// ? Se utilizará una función de alto orden
// ? en la que le pasaremos una función como 
// ? argumento.

// Utilizaremos del arreglo de autos la función filter
// para filtrar en base a los coches que tenemos la marca.
// Para ello tilizaremos la función de .filter()
// y en vez de pasarle un arrow function como
// común mente se le hace:
// const resultado = autos.filter(() => {});
// O con su valor en la lista por cad aiteración:
// const resultado = autos.filter( auto => {});
// Le pasaremos una función: filtrarMarca()

// Está función ahora recibira como argumento una
// variable que llamaremos auto, que es la misma
// que se obtiene de la función filter que
// optiene al objeto de la lista/array en cada iteración
// esta variable de auto será un objeto de esa lista
// el cuál nos ayudará a filtrar

// Recuerda que .filter() resiste el encadenamiento de funciones
function filtrarAuto(){

    // ? Nos devolverá un nuevo array de objetos filtrados con los atributos que
    // ? si cumplieron la condición para esos objetos.
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    // ?  Podría ser un arrow functión, () => {}, en vez de solo poner el nombre de la función.
    // ?  Entones tenemos un elemento auto que irá recurrriendo, por eso se pasa aquí.
    // auto => {
    //     const {marca} = datosBusqueda;
    //     //Si el dato que buscamos tiene algo
    //     if(marca){
    //         return auto.marca === marca;
    //     }
    //     return auto;
    // };


    // Si hay algo entonces mostraremos los automoviles
    if(resultado.length){
        mostrarAutos(resultado);

    }else{
        noResultado();
    }
}

function noResultado(){
    // Limpiamos la lista de elementos
    limpiarHTML();

    // Creamos el mensaje
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados. Intenta con otros términos búsqueda.';
    resultado.appendChild(noResultado);
}


// ?  Podría ser un arrow functión, () => {}, en vez de solo poner el nombre de la función.
// ?  Entones tenemos un elemento auto que irá recurrriendo, por eso se pasa aquí.
// auto => {
//     const {marca} = datosBusqueda;
//     //Si el dato que buscamos tiene algo
//     if(marca){
//         return auto.marca === marca;
//     }
//     return auto;
// };

// ! .filter de Marca En una sola línea marcará error.
// Arrow Function
// auto => {datosBusqueda.marca ? auto.marca === marca : auto };
// .filter con el arrow function de arriba
// const resultado = autos.filter(auto => {datosBusqueda.marca ? auto.marca === marca : auto });
// ! Además si filtramos así se verá muy largo o dificil de leer.

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    // ? Si el dato que buscamos tiene algo
    if(marca){
        // ? Si son iguales retorarán el objeto por que cumple la condición.
        return auto.marca === marca;
    }
    // ? Si no retornará al elemento que tenia.
    return auto;
}
function filtrarYear(auto){
    const {year} = datosBusqueda;
    // ? Si el dato que buscamos tiene algo
    if(year){
        // ? Si son iguales retorarán el objeto por que cumple la condición.
        return auto.year === year;
    }
    // ? Si no retornará al elemento que tenia.
    return auto;
}
function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    // ? Si el dato que buscamos tiene algo
    if(minimo){
        // ? Si son iguales retorarán el objeto por que cumple la condición.
        return auto.precio >= minimo;
    }
    // ? Si no retornará al elemento que tenia.
    return auto;
}
function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    // ? Si el dato que buscamos tiene algo
    if(maximo){
        // ? Si son iguales retorarán el objeto por que cumple la condición.
        return auto.precio <= maximo;
    }
    // ? Si no retornará al elemento que tenia.
    return auto;
}
function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    // ? Si el dato que buscamos tiene algo
    if(puertas){
        // ? Si son iguales retorarán el objeto por que cumple la condición.
        return auto.puertas === puertas;
    }
    // ? Si no retornará al elemento que tenia.
    return auto;
}
function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    // ? Si el dato que buscamos tiene algo
    if(transmision){
        // ? Si son iguales retorarán el objeto por que cumple la condición.
        return auto.transmision === transmision;
    }
    // ? Si no retornará al elemento que tenia.
    return auto;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;
    // ? Si el dato que buscamos tiene algo
    if(color){
        // ? Si son iguales retorarán el objeto por que cumple la condición.
        return auto.color === color;
    }
    // ? Si no retornará al elemento que tenia.
    return auto;
}