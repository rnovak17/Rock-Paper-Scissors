function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum === 1) {
        return 'rock';
    } else if (choiceNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);