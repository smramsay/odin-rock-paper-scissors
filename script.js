
function getComputerChoice() {
    // Get random choice of 'Rock', 'Paper', or 'Scissors'
    choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        return "tie";
    }
    
    let playerLost = null;
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == "paper") {
                playerLost = true;
            } else if (computerSelection == "scissors") {
                playerLost = false;
            }
            break;
        case 'paper':
            if (computerSelection == "scissors") {
                playerLost = true;
            } else if (computerSelection == "rock") {
                playerLost = false;
            }
            break;
        case 'scissors':
            if (computerSelection == "rock") {
                playerLost = true;
            } else if (computerSelection == "paper") {
                playerLost = false;
            }
            break;
        default:
            console.log("You lose by not making a valid choice!");
            return "computer";
    }

    if (playerLost) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computer";
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "player";
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