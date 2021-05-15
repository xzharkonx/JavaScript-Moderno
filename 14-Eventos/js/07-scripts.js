
// # 112. Prevenir Event Bubbling con Delegation

// * Esta es otra técnica para prevenir el Event Bubbling

const cardDiv  = document.querySelector('.card');

// Está selección es muy general
// cardDiv.addEventListener('click', () => {
//     console.log(`Click en card`);
// });

// * Si queremos especificar la selección, lo haremos con e.target()
cardDiv.addEventListener('click', e => {
    // ? Nos mostrará los elementos que se han seleccionado y que forman parte de la card
    console.log(e.target);
    // ? Identificaremos a las clases de los elementos a los cuales les estaremos dando click
    console.log(e.target.classList);

    // ? Verificamos si al elemento seleccionado contiene la clase "titulo"
    if(e.target.classList.contains('titulo')){
        console.log(`Diste click en titulo`);
    }
    // ? Verificamos si al elemento seleccionado contiene la clase "precio"
    if(e.target.classList.contains('precio')){
        console.log(`Diste click en precio`);
    }
    // ? Verificamos si al elemento seleccionado contiene la clase "card"
    if(e.target.classList.contains('card')){
        console.log(`Diste click en card`);
    }

});

// ? De esta forma seleccionaremos mejor y más especificamente los elementos
// ? Pero hay que saber que clase contiene ese elemento y sobre que clase trabajar 
// ? (podría tener varias).