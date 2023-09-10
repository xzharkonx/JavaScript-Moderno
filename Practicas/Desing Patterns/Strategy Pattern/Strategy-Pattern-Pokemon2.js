
function Battle() {
    
    climaConfig = [];
    terraintConfig = [];

    this.executeAtack = atack => {
        console.log(`Ataque: ${attack}`);
    }
}

const battle = new Battle();


// StrategyPattern
// StrategyAttack
function AttackStrategy(){

    this.strategy = null;

    const setStrategy = battle => {
        this.strategy = battle;
    }
    
    const executeAtack = attack => {
        this.strategy.executeAtack(attack);
        return ;
    }
}


const myAttack = new AttackStrategy();
const otherAttack = new AttackStrategy();

// Turn
function computeTurn(battle, myAttack, otherAttack){


    const state = myAttack;
    state.setStrategy(battle);
    state.executeAtack(1);
    
    // const state = otherAttack;
    // state.setStrategy(battle);
    // state.executeAtack(1);

}

computeTurn(battle, myAttack, otherAttack);