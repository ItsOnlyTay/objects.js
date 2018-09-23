//Objects-Coding Time
//Add Char XP
const Aurora = { 
    name: "Aurora",
    health: 250,
    strength: 75,
    xp: 50,
    describe(){
        return `${this.name} has: 
                ${this.health} HP 
                ${this.strength} strength
                ${this.xp} XP 
                `
    }
};

//Took 20HP from arrow dmg
Aurora.health -=20;

//Equips necklace of strength for 20
Aurora.strength +=20;

//Defeats dragon gaining 35 XP
Aurora.xp +=35;

console.log(Aurora.describe());

//********** Doge Model **********/
const dog = {
    name: "Jerry",
    species: "Corgi",
    size: "50 lbs",
    bark: "Ruff"
}

console.log(`${dog.name} is a ${dog.species} measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark}`);

//********** Bank Account **********/
const account = {
    name: "Alex",
    balance: 0,
        describe(){
            return `Owner: ${this.name}, balance ${this.balance}`
        }
}
function balance(change){
    account.balance = account.balance + change;
}
    
console.log(account.describe());
balance(250);
balance(-80);
console.log(account.describe());