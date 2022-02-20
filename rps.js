
function compInput() {
    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (randInt(1, 3) == 1) {
        return "rock";
    } else if (randInt(1, 3) == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function gameResult(playerChoice, compChoice) {
    if (playerChoice == compChoice) {
        return "Tie";
    } else if ((playerChoice == "rock" && compChoice == "scissors") || (playerChoice == "paper" && compChoice == "rock") || (playerChoice == "scissors" && compChoice == "paper")) {
        return "Win";
    } else {
        return "Lose";
    }
}

function playGame() {
    compWin = 0;
    playerWin = 0;
    for (let i = 1; i <= 5; i++) {
        let playerInput = prompt("Please input your choice for the Rock Paper Scissors game");
        let playerChoice = playerInput.toLowerCase();
        let compChoice = compInput();
        if (!(playerChoice == "rock" || playerChoice == "scissors" || playerChoice == "paper")) {
            break;
        } else {
            gameResult(playerChoice, compChoice);
            if (gameResult(playerChoice, compChoice) == "Win") {
                playerWin += 1;
                console.log(`${playerChoice} beats ${compChoice}, you win!`);
            } else if (gameResult(playerChoice, compChoice) == "Tie") {
                console.log(`${playerChoice} and ${compChoice} is the same, It's a tie!`);
            } else {
                compWin += 1;
                console.log(`${compChoice} beats ${playerChoice}, you lose!`);
            }
        }
    }
    console.log(`Score at the end of 5 games is ${playerWin} to ${compWin}`)
}

playGame()