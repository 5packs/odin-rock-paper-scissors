function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
    return choiceArray[getRandomInt(3)];
}

function playRound() {
    const result = document.querySelector('#results');
    let score = 0;
    let playerChoice = this.textContent.toLowerCase()
    let computerChoice = getComputerChoice();
    let gameOutput = "";
    switch (playerChoice){
        case "rock":
            if (computerChoice === "paper"){gameOutput = "You Lost!"}
            else if (computerChoice === "rock"){gameOutput = "It's a tie!"}
            else {
                gameOutput = "You Won!";
            }
        case "paper":
            if (computerChoice === "scissors"){gameOutput = "You Lost!"}
            else if (computerChoice === "paper"){gameOutput = "It's a tie!"}
            else {
                gameOutput = "You Won!";
            }
        case "scissors":
            if (computerChoice === "rock"){gameOutput = "You Lost!"}
            else if (computerChoice === "scissors"){gameOutput = "It's a tie!"}
            else {
                gameOutput = "You Won!";
                score = 1;
            }
    }
    const resultText = document.createElement('h2');
    resultText.textContent = gameOutput;
    result.append(resultText);
    const scoreDisplay = document.querySelector("#score");
    scoreDisplay.textContent = parseInt(scoreDisplay.textContent) + score;
    if (parseInt(scoreDisplay.textContent) >= 5){alert("Player Won!")}
}

const buttons = document.querySelectorAll('button.game-element');

buttons.forEach(button => button.addEventListener('click', button.addEventListener('click', playRound)));
