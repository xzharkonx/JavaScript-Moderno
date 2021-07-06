
// # Strategy Pattern
// 02/06/2021
// URL Tutorial: https://www.youtube.com/watch?v=SicL4fYCz8w
// GitHub: https://github.com/pkellz/devsage/blob/master/DesignPatterns/StrategyDesignPattern.js

// ## Creating the functions in Object Constructors.


function Fedex(){
    
    // - Strategy
    this.calculate = package => {
        
        // Fedex calculations
        // return 2.45;
        return calculations(package);
    }
}
function UPS(){
    
    // - Strategy
    this.calculate = package => {
        // UPS calculations
        // return 1.56;
        return calculations(package);
    }
}
function USPS(){

    // - Strategy
    this.calculate = package => {
        // USPS calculations
        // return 4.5;
        return calculations(package);
    }
}

// * Object for the Strategies
function Shipping(){

    // ? For the type of Strategy
    this.company = null;

    // ? Assing the Strategy = Object
    this.setStrategy = company => {
        this.company = company
    }

    // ? Ejecute the Strategy.
    this.calculate = package => {
        return this.company.calculate(package);
    }

}

function calculations({from, to, weight}){
    console.log(`From: ${from}, To: ${to} and Weight: ${weight}`)
    const monto = weight * 0.5;
    return monto;
}

// ## Creating the intances.

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

// ! Creating a Object Literal
const package = { from: 'Alabama', to: 'Georgia', weight: 1.56}


// * Implement Classic Objects
fedex.calculate(package);
ups.calculate(package);
usps.calculate(package);

// * Implement Strategy Pattern
const shipping = new Shipping();

// ? We pass the Object.
shipping.setStrategy(fedex);
console.log(`Fedex: ${shipping.calculate(package)}`);

// ? We pass a new Object. Change the Strategy
shipping.setStrategy(ups);
console.log(`UPS: ${shipping.calculate(package)}`);

// ? We pass a new Object. Change the Strategy
shipping.setStrategy(usps);
console.log(`USPS: ${shipping.calculate(package)}`);

// * Code Clear and Concise.