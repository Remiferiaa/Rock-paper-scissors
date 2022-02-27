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
        document.getElementById("result").textContent = `${playerChoice} and ${compChoice} is the same, It's a tie!`
    } else if ((playerChoice == "rock" && compChoice == "scissors") || (playerChoice == "paper"
        && compChoice == "rock") || (playerChoice == "scissors" && compChoice == "paper")) {
        playerWin += 1; 
        document.getElementById("playerScore").textContent = `${playerWin}`;
        document.getElementById("result").textContent = `${playerChoice} beats ${compChoice}, you win!`;
    } else {
        compWin += 1;
        document.getElementById("compScore").textContent = `${compWin}`;
        document.getElementById("result").textContent = `${compChoice} beats ${playerChoice}, you lose!`;
    }
}

function playGame() {
    playerWin = 0;
    compWin = 0;
    document.getElementById("compScore").textContent = `${compWin}`;
    document.getElementById("playerScore").textContent = `${playerWin}`;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const playerChoice = button.id;
            const compChoice = compInput();
            document.getElementById("endscore").textContent = "";
            document.getElementById("compScore").textContent = `${compWin}`;
            document.getElementById("playerScore").textContent = `${playerWin}`;
            gameResult(playerChoice, compChoice);
            if (playerWin >= 5) {
                document.getElementById("endscore").textContent = `You win with the endscore of ${playerWin} to ${compWin}`;
                playerWin = 0;
                compWin = 0;
            } else if (compWin >= 5) {
                document.getElementById("endscore").textContent = `Computer wins with the endscore of ${compWin} to ${playerWin}`;
                playerWin = 0;
                compWin = 0;
            }
        });
    });
}


let playerWin;
let compWin;
playGame()











