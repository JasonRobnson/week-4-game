'strict'

var crysPlayerGame = {
    playerNumber: [],
    playerwIN: [],
    playerLoss: [],
    crysOne: [],
    crysTwo: [],
    crysThree: [],
}

let totalvalue = 0;

let winTally = 0;

let lossTally = 0;

let writeScore = document.getElementById('yourScore');

//returns a random number between 19 and 120
function gameRandomNumGen (min, max) {
    var min = 19;
    var max = 121;
    return Math.floor(Math.random() * (max - min)) + min;
}
// rand number generator used by crystals

function playerRandomNumGen (min, max) {
    var min = 1;
    var max = 13;
    return Math.floor(Math.random() * (max - min)) + min;
}

var gameNumber = gameRandomNumGen ();
    $('#gameNum').html(gameNumber);
    console.log(gameNumber);
    

        
// linking the randomNumberGenerator to Crystal 1-4
const crystalOneNumber = playerRandomNumGen();

   $('#crystalOne').on('click', function() {
    totalvalue = totalvalue + crystalOneNumber;
    $('#yourNum').text(totalvalue);
    console.log(totalvalue);
    });


const crystalTwoNumber = playerRandomNumGen();
$('#crystalTwo').on('click', function() {
    totalvalue = totalvalue + crystalTwoNumber;
    $('#yourNum').text(totalvalue);
    console.log(totalvalue);
});



const crystalThreeNumber = playerRandomNumGen();
$('#crystalThree').on('click', function() {
    totalvalue = totalvalue + crystalThreeNumber;
    $('#yourNum').text(totalvalue);
    console.log(totalvalue);

});

const crystalFourNumber = playerRandomNumGen();
$('#crystalFour').on('click', function() {
    totalvalue = totalvalue + crystalFourNumber;
    $('#yourNum').text(totalvalue);
    console.log(totalvalue);

});

function score ();
    $('#crystalOne').on('click', function() {
  if (totalvalue > gameNumber) {
        lossTally = lossTally + 1;
        console.log(lossTally);
        alert('You Lose!');
        writeScore = lossTally; }
    else if (totalvalue == gameNumber) {
    winTally = winTally + 1;
    alert('You Win!');
    writeScore = winTally;
    }
});

score ();

