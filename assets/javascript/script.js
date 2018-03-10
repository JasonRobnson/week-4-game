'strict'

var crysPlayerGame = {
    playerNumber: [],
    playerwIN: [],
    playerLoss: [],
    crysOne: [],
    crysTwo: [],
    crysThree: [],
}

var totalvalue = 0;


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
    $('#gameNum').html(gameNumber);
    console.log(gameNumber);

        

var crystalOneNumber = playerRandomNumGen();

   $('#crystalOne').on('click', function() {
    totalvalue = totalvalue + crystalOneNumber;

    console.log(totalvalue);
    });


var crystalTwoNumber = playerRandomNumGen();
$('#crystalTwo').on('click', function() {
    totalvalue = totalvalue + crystalTwoNumber;
    console.log(totalvalue);
});



var crystalThreeNumber = playerRandomNumGen();
$('#crystalThree').on('click', function() {
    totalvalue = totalvalue + crystalThreeNumber;
    console.log(totalvalue);
});







