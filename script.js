
function getComputerChoice() {
    // Get random choice of 'Rock', 'Paper', or 'Scissors'
    choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return "tie";
    }
    console.log(playerSelection);
    console.log(computerSelection);
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == "paper") {
                console.log("You lose! Paper beats Rock");
                return "computer";
            } else if (computerSelection == "scissors") {
                console.log("You win! Rock beats Scissors");
                return "player"
            }
            break;
        case 'paper':
            if (computerSelection == "scissors") {
                console.log("You lose! Scissors beats Paper");
                return "computer";
            } else if (computerSelection == "rock") {
                console.log("You win! Paper beats Rock");
                return "player";
            }
            break;
        case 'scissors':
            if (computerSelection == "rock") {
                console.log("You lose! Rock beats Scissors");
                return "computer";
            } else if (computerSelection == "paper") {
                console.log("You win! Scissors beats Paper");
                return "player"
            }
            break;
        default:
            console.log("You lose by not making a valid choice!");
            return "computer";
    }
}

function game(rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        console.group(`Round ${i}`);
        let winner = playRound(getPlayerChoice(), getComputerChoice());
        if (winner == "player") {
            playerScore++;
        } else if (winner == "computer") {
            computerScore++;
        }
        console.groupEnd(`Round ${i}`);
    }

    console.log(`Player: ${playerScore}, Computer: ${computerScore}, Ties: ${rounds - (playerScore + computerScore)}`);
}

game();