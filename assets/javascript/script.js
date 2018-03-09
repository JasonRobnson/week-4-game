'strict'

var crysPlayerGame = {
    playerNumber: [],
    playerwIN: [],
    playerLoss: [],
    crysOne: [],
    crysTwo: [],
    crysThree: [],
}

//returns a random number between 19 and 120
function gameRandomNumGen (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(gameRandomNumGen(19, 121)); 

function playerRandomNumGen (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(playerRandomNumGen(1, 13)); 





