
function nameElementos(letra) {

    let elemento = {
        name: "Aluminio",
        tierra: 2,
        fuego: 3,
        aire: 4,
    }
    
    let elemento1 = {
        name: "Potacio",
        tierra: 2,
        fuego: 3,
        aire: 4,
    }
    
    let elemento2 = {
        name: "Hidrogeno",
        tierra: 2,
        fuego: 3,
        aire: 4,
    }
    
    let elemento3 = {
        name: "Calcio",
        tierra: 2,
        fuego: 3,
        aire: 4,
    }
    
    let elemento4 = {
        name: "Hierro",
        tierra: 2,
        fuego: 3,
        aire: 4,
    }
    let elemento5 = {
        name: "Azufre",
        tierra: 2,
        fuego: 3,
        aire: 4,
    }
    
    let elemen = [elemento, elemento1, elemento2, elemento3];

    elemen.push(elemento4);
    elemen.push(elemento5);

    elemen.forEach(element => {
        console.log(`Los elementos : ${element.name}`);

    });
    const elementosFiltrados = elemen.filter(ele => ele.name.includes(letra));
    return elementosFiltrados;
}

const valores = nameElementos("f");
valores.forEach(val => console.log(val));