function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
    return choiceArray[getRandomInt(3)];
}

function getPlayerChoice() {
    let player = "";
    do {
        player = prompt("Play rock paper or scissors!").toLowerCase();
    } while (!(player === "paper" || player === "rock" || player === "scissors"))
    return player;
}

function playRound(playerChoice, computerChoice) {
    switch (playerChoice){
        case "rock":
            if (computerChoice === "paper"){return 0}
            else if (computerChoice === "rock"){return 1}
            else {return 2}
        case "paper":
            if (computerChoice === "scissors"){return 0}
            else if (computerChoice === "paper"){return 1}
            else {return 2}
        case "scissors":
            if (computerChoice === "rock"){return 0}
            else if (computerChoice === "scissors"){return 1}
            else {return 2}
    }
}

function game(){
    let playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    switch (result){
        case 0:
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
            break;
        case 1:
            console.log("It's a draw!");
            break;
        case 2:
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
            break;
    }
    return result;
}

let score = 0;
let computerscore = 0;
for (let i=0; i<5; i++){
    let gameresult = game();
    switch (gameresult){
        case 0:
            computerscore++;
            break;
        case 1:
            score++;
            computerscore++;
            break;
        case 2:
            score++;
            break;
            
    }
}

if (computerscore > score){
    console.log("You lose! Your score was: " + score);
}
else {
    console.log("You win! Your score was: " + score);
}
