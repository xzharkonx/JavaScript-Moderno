
// Variables

let enemies = [];
const button = document.querySelector('#createEnemy');
const buttonShow = document.querySelector('#showEnemies');
const selectFactory = document.querySelector('#tipoFabrica');

button.addEventListener('click', gameLogic);
buttonShow.addEventListener('click', showEnemies);

// selectFactory.addEventListener('change', leerValor);


// Logic here.

class Entity {


    // constructor(){
    //     this.entity = "Entidad";
    // }

    updateLogic() {
        console.log(`Actualizando lógica`);
    }
}


// Creating Enemies

class Boo extends Entity {

    constructor(){
        super();
        this.entity = "Boo";
        this.name = "Boo";
        this.damage = 10;
    }

    mostrarEnemigo() {
        console.log(`${this.entity}`);
    }

    attack(){
        console.log(`Attack: ${this.name} !!!`);
    }
    
}

class Koopa extends Entity {

    constructor(){
        super();
        this.entity = "Koopa";
        this.name = "Koopa";
        this.damage = 7;
    }

    mostrarEnemigo() {
        console.log(`${this.entity}`);
    }

    attack(){
        console.log(`Attack: ${this.name} !!!`);
    }

}

class Goomba extends Entity {

    constructor(){
            super();
            this.entity = "Goomba";
            this.name = "Goomba";
            this.damage = 8;
            
        }

    mostrarEnemigo() {
        console.log(`${this.entity}`);
    }
    
    attack(){
        console.log(`Attack: ${this.name} !!!`);
    }

}



function gameLogic() {
    
    
    
    // Fabric Enemies
    // Use the Fabric

    let enemy;

    // switch(shouldSpawnEnemy()) {
    switch(selectFactory.value) {
        
        
        case 'randomEnemies':
            
            // ? Se podría aplicar el patrón singleton si es que
            // ? se vuelve a instanciar el mismo objeto.
            // [Boo, Goomba, Koopa].
            // * Esto servirá para que se maneje el mismo objeto.
            // ! Y no se creen instancias cada vez que toca uno de ellos.

            enemy = new EnemyFactory(new RandomEnemyFactory());
            break;
            
        case 'randomDifficultEnemies':
            enemy = new EnemyFactory(new RandomDifficultEnemyFactory());
            break;
                
        case 'goombaEnemies':
            enemy = new EnemyFactory(new GoombaFactory());
            break;

        default:
    }
    
    // This return Object Enemy.
    let targetEnemy = enemy.createEnemy();

    // Other Method to change enemy.
    // enemy.updateEnemy(new GoombaFactory());

    // Add to list enemies
    // enemies.push(enemy.createEnemy());
    enemies.push(targetEnemy);

    // Activate Method Attack
    // enemy.createEnemy().attack();
    targetEnemy.attack();
    

}

// Fabric Pattern

class EnemyFactory {

    // Private attribute
    #enemyFactory = "";

    // Instance of Products
    constructor(enemyFactory) {

        this.#enemyFactory = enemyFactory;
    }    

    createEnemy() {
        return this.#enemyFactory.createEnemy();
    }
    updateEnemy(enemyFactory) {
        return this.#enemyFactory = enemyFactory;
    }
}

// Implementation.

class RandomEnemyFactory extends EnemyFactory {

    createEnemy() {

        let randomNum = Math.random();
        let enemy;

        if(randomNum > 0.66) {
            
            enemy = new Koopa();
            console.log(enemy);
            
        } else if (randomNum > 0.33) {
            
            enemy = new Goomba();
            console.log(enemy);
            
        } else {
            
            enemy = new Boo();
            console.log(enemy);
        }

        return enemy;

    }
}

class RandomDifficultEnemyFactory extends EnemyFactory {

    createEnemy() {

        let randomNum = Math.random();
        let enemy;
        
        if(randomNum > 0.66) {
            
            enemy = new Koopa();
            enemy.damage = enemy.damage * 1.2
            console.log(enemy);
            
        } else if (randomNum > 0.33) {
            
            enemy = new Goomba();
            enemy.damage = enemy.damage * 1.5
            console.log(enemy);
            
        } else {
            
            enemy = new Boo();
            enemy.damage = enemy.damage * 2
            console.log(enemy);
        }

        return enemy;
    }
}

class GoombaFactory extends EnemyFactory {

    
    createEnemy() {
            
        let enemy;

        enemy = new Goomba();
        console.log(enemy);
        return enemy;
    }
}

// Show Enemies 

function showEnemies() {

    enemies.length ? enemies.forEach(enemy => enemy.mostrarEnemigo()) : console.log("No hay.");
}