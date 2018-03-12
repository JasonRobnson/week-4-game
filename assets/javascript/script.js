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
//reset for new game

function reset(){
    var min = 19;
    var max = 121;
    gameNumber = Math.floor(Math.random() * (max-min)) + min;
    $('#gameNum').html(gameNumber);
    let crystalOneNumber = playerRandomNumGen();
    let crystalTwoNumber = playerRandomNumGen();
    let crystalThreeNumber = playerRandomNumGen();
    let crystalFourNumber = playerRandomNumGen();
    totalvalue = 0;
    $('#yourNum').text(totalvalue);  

    
}
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

// the adding function to the score

function score(){
   
    if(totalvalue == gameNumber){
        alert('You won!');
        winTally++;
        $('#yourScore').text(winTally);
        reset();
    } else if (totalvalue > gameNumber){
        alert('You lose!')
        lossTally++;
        $('#yourLoss').text(lossTally);
        reset();
    }
    console.log(winTally);
};
    

        
// linking the randomNumberGenerator to Crystal 1-4
const crystalOneNumber = playerRandomNumGen();

   $('#crystalOne').on('click', function() {
    totalvalue = totalvalue + crystalOneNumber;
    $('#yourNum').text(totalvalue);
    console.log(totalvalue);
    score();
    });


const crystalTwoNumber = playerRandomNumGen();
$('#crystalTwo').on('click', function() {
    totalvalue = totalvalue + crystalTwoNumber;
    $('#yourNum').text(totalvalue);
    console.log(totalvalue);
    score();
});



const crystalThreeNumber = playerRandomNumGen();
$('#crystalThree').on('click', function() {
    totalvalue = totalvalue + crystalThreeNumber;
    $('#yourNum').text(totalvalue);
    console.log(totalvalue);
    score();

});

const crystalFourNumber = playerRandomNumGen();
$('#crystalFour').on('click', function() {
    totalvalue = totalvalue + crystalFourNumber;
    $('#yourNum').text(totalvalue);
    console.log(totalvalue);
    score();

});


reset();

// function score () {
//     $('#crystalOne', '#crystalTwo', '#crystalThree', '#crystalFour').on('click', function()
//    { if (totalvalue > gameNumber) {
//         lossTally = lossTally + 1;
//         console.log(lossTally);
//         alert('You Lose!');
//         writeScore = lossTally;
//     }
// } 
// else if ( totalvalue == gameNumber) {
//     winTally = winTally + 1;
//     alert('You Win!');
//     writeScore = winTally;
// }
// });


// function score ();
//     $('#crystalOne').on('click', function {
//   if (totalvalue > gameNumber) {
//         lossTally = lossTally + 1;
//         console.log(lossTally);
//         alert('You Lose!');
//         writeScore = lossTally; }
//     else if (totalvalue == gameNumber) {
//     winTally = winTally + 1;
//     alert('You Win!');
//     writeScore = winTally;
//     }
// });

// score ()

