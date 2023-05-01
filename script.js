
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

    const resultDiv = document.querySelector('.result');

    if (playerSelection == computerSelection) {
        resultDiv.textContent = "It's a tie!";
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
        resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        incrementScore('computer');
    } else {
        resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        incrementScore('player');
    }
    checkWin();
    return playerLost ? "computer" : "player";
}

// TODO: Disable buttons to stop the game or replace with a reset button.
function checkWin() {
    const resultDiv = document.querySelector('.result');
    document.querySelectorAll('.score div span').forEach(score => {
        if (parseInt(score.textContent) === 5) {
            const parentId = score.parentNode.getAttribute('id');
            
            const finalResult = document.createElement('h3');
            finalResult.textContent = `Game Over! ${parentId} wins!`;
            resultDiv.after(finalResult);

            return parentId;
        }
    });
    return false;
}

function incrementScore(winner) {
    const score = document.querySelector(`.score #${winner} span`)
    const curScore = parseInt(score.textContent);
    score.textContent = curScore + 1
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

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', (event) => playRound(button.textContent.toLowerCase(), getComputerChoice())));