
function getComputerChoice() {
    // Get random choice of 'Rock', 'Paper', or 'Scissors'
    choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == "paper") {
                return "You lose! Paper beats Rock";
            } else if (computerSelection == "scissors") {
                return "You win! Rock beats Scissors";
            }
            break;
        case 'paper':
            if (computerSelection == "scissors") {
                return "You lose! Scissors beats Paper";
            } else if (computerSelection == "rock") {
                return "You win! Paper beats Rock";
            }
            break;
        case 'scissors':
            if (computerSelection == "rock") {
                return "You lose! Rock beats Scissors";
            } else if (computerSelection == "paper") {
                return "You win! Scissors beats Paper";
            }
            break;
        default:
            return "You lose by not making a valid choice!";
    }
}

playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection.toLowerCase()));