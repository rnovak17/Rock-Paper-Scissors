const playerSelection = 'Rock'
console.log(game());



function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum === 1) {
        return 'ROCK';
    } else if (choiceNum === 2) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper, or Scissors: ");
    let player = playerSelection.toUpperCase();
    let computer = computerSelection;
    if (computer === player) {
        return 'tie';
    } else if (computer === "ROCK" && player === "PAPER") {
        return "player";
    } else if (computer === "ROCK" && player === "SCISSORS") {
        return "computer";
    } else if (computer === "PAPER" && player === "SCISSORS") {
        return "player";
    } else if (computer === "PAPER" && player === "ROCK") {
        return "computer";
    } else if (computer === "SCISSORS" && player === "PAPER") {
        return "computer";
    } else if (computer === "SCISSORS" && player === "ROCK") {
        return "player";
    } else {
        return 'Unexpected input';
    }
}

// TODO: break out of the loop if either party wins 3
// TODO: Give better win messages
// TODO: Extend game if tied
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        winner = playRound();
        if (winner === "tie") {
            alert("Tie!")
            computerScore++;
            playerScore++;
        } else if (winner === "computer") {
            alert("Computer wins!")
            computerScore++;
        } else {
            alert("You win!");
            playerScore++;
        }
    }
    if (computerScore > playerScore) {
        alert("Computer wins it all!");
    } else {
        alert("Player wins it all!");
    }
}