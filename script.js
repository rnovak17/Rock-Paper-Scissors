const playerSelection = 'Rock'
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




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

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection;
    if (computer === player) {
        return 'Tie!';
    } else if (computer === "ROCK" && player === "PAPER") {
        return "You Win! Paper beats Rock";
    } else if (computer === "ROCK" && player === "SCISSORS") {
        return "You Lose! Rock beats Scissors";
    } else if (computer === "PAPER" && player === "SCISSORS") {
        return "You Win! Scissors beats Paper";
    } else if (computer === "PAPER" && player === "ROCK") {
        return "You Lose! Paper beats Rock";
    } else if (computer === "SCISSORS" && player === "PAPER") {
        return "You Lose! Scissors beats Paper";
    } else if (computer === "SCISSORS" && player === "ROCK") {
        return "You Win! Rock beats Scissors";
    } else {
        return 'Unexpected input';
    }
}