
function invocar(){

    return {
        
        pokemon(){
            
            return {

                Pikachu() {
                    
                    return {
                        nombre: 'Pikachu',
                        type: 'Electric',
                        initialLife: 100,
                        def: 14,
                        level: 1,
                        atacks: [
                            {
                                nomAttack: "basic",
                                damage: 10,
                                efectivity: true,
                            },
                            {
                                nomAttack: "impacThunder",
                                damage: 30,
                                efectivity: true,

                            }
                        ]
                    }
                },

                Charmander() {
                    
                    return {
                        nombre: 'Charmander',
                        type: 'Fire',
                        initialLife: 100,
                        def: 10,
                        level: 1,
                        atacks: [
                            {
                                nomAttack: "basic",
                                damage: 10,
                                efectivity: true,
                            },
                            {
                                nomAttack: "Fire Bold",
                                damage: 30,
                                efectivity: true,

                            }
                        ]
                    }
                },

            }
        }
    }
}


const pikachu = invocar().pokemon().Pikachu();
const charmander = invocar().pokemon().Charmander();

function Battle(){
    
    this.pokemons = [pikachu, charmander];

    this.climaConfig = {
        typeTime: ['Sunny', 'Cold']
    }

    this.terraintConfig = {
        typeTerrain: ['Water', 'Rocks']
    }

    // this.attack = () => -100;
}
 

function executeAtack(){

    this.attack = null;

    this.setStrategyAttack = battle => {
        this.attack = battle;
    }

    // ? Ejecute the Strategy.
    this.setAttack = attack => {

        try {
            
            return this.attack.pokemons[pokemonAttack()].atacks[attack]; // Info of Attack
            // return this.attack.pokemons[pokemonAttack()].atacks[attack].damage; // Damage of Attack
            
        } catch (error) {
            console.log('Error en la consulta del ataque');
            return 'Error en el ataque.'
        }

    }

}

function pokemonAttack(){
    const pokemon = Number(prompt("Which pokemon should I attack?"));

    if (!isNaN(pokemon)) {
        return pokemon;
    } else {
        alert("Enter the pokemon Number");
        
        pokemonAttack();
    }
}

function pokemonTypeAttack(){
    const pokemonTipeAttack = Number(prompt("What pokemon attack should be used?"));

    if (!isNaN(pokemonTipeAttack)) {
        return pokemonTipeAttack;
    } else {
        alert("Enter the pokemon attack Number");
        attack.setAttack(pokemonTypeAttack());
    }
}

const battle = new Battle();

const attack = new executeAtack();
attack.setStrategyAttack(battle);
console.log(attack.setAttack(pokemonTypeAttack()));