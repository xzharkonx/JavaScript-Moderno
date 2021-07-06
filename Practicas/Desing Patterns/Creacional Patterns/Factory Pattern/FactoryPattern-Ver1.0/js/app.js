
// * Objetos que creará la fábrica
const goomba = {
    nombre: "Goomba",
    life: 100,
    lvl: 1,
    attack: function() { console.log(`${this.nombre} esta Atacando!`) }
}

const boo = {
    nombre: "Boo",
    life: 120,
    lvl: 1,
    attack: function() { console.log(`${this.nombre} esta Atacando!`) }
}


// * Esta es la fabrica.
function enemiesFactory(){

    // - Debe tener un método que recibirá una decición de que objeto
    // - debe de instanciar y retornará ese tipo de objeto.
    this.createEnemy = (typeEnemy) =>{
        
        switch(typeEnemy) {
            
            case 'Goomba':
                return goomba;
            case 'Boo':
                return boo;
        }

    }
}


const enemyF = new enemiesFactory();
const enemy = enemyF.createEnemy("Boo");
console.log(enemy); // [boo:Object]
enemy.attack();