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
    var min = 19;
    var max = 121;
    return Math.floor(Math.random() * (max - min)) + min;
}


function playerRandomNumGen (min, max) {
    var min = 1;
    var max = 13;
    return Math.floor(Math.random() * (max - min)) + min;
}

var gameNumber = gameRandomNumGen (); 
    console.log(gameNumber);


var crystalOneNumber = playerRandomNumGen();
    crysPlayerGame.crysOne.push(crystalOneNumber);
    console.log(crysPlayerGame.crysOne);
    console.log(crysPlayerGame.crysOne.length);

var crystalTwoNumber = playerRandomNumGen();
    crysPlayerGame.crysTwo.push(crystalTwoNumber);
    console.log(crysPlayerGame.crysTwo);
    console.log(crysPlayerGame.crysTwo.length);


var crystalThreeNumber = playerRandomNumGen();
    crysPlayerGame.crysThree.push(crystalThreeNumber);
    console.log(crysPlayerGame.crysThree);
    console.log(crysPlayerGame.crysThree.length);






