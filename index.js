function getComputerChoice() {
    let randomN = Math.random();
    if (randomN < 1/3) {
        return "rock";
    } else if (randomN < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choice rock, paper, or scissors:")

    return humanChoice;
}


// playRound(humanSelection, computerSelection);
// console.log(humanScore);
// console.log(computerScore);

function playGame() {

    function playRound(humanChoice, computerChoice) {
        const humanChoiceLower = humanChoice.toLowerCase();
        const computerChoiceLower = computerChoice.toLowerCase();
        if (humanChoiceLower == computerChoiceLower ) {
            console.log(`You both played ${humanChoiceLower}`);
            return 0;
        } else if (humanChoiceLower == 'rock') {
            if (computerChoice == 'scissors') {
                console.log("You win! Rock beats Scissors");
                return 1;
            } else {
                console.log("You lose! Paper beats Rock");
                return -1;
            }
        } else if (humanChoiceLower == 'paper') {
            if (computerChoice == 'rock') {
                console.log("You win! Paper beats Rock");
                return 1;
            } else {
                console.log("You lose! Scissors beats Paper")
                return -1;
            }
        } else if (humanChoiceLower == 'scissors') {
            if (computerChoice == 'paper') {
                console.log("You win! Scissors beats Paper");
                return 1;
            } else {
                console.log("You lose! Rock beats Scissors")
                return -1;
            }
        }
    }

    let gameScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let roundScore = playRound(humanSelection, computerSelection)
        gameScore += roundScore;
    }

    if (gameScore > 0) {
        console.log("You win!")
    } else if (gameScore == 0) {
        console.log("It's a tie!")
    } else {
        console.log("You lose!")
    }

}

playGame()
