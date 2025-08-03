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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const humanChoiceLower = humanChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();
    if (humanChoiceLower == computerChoiceLower ) {
        console.log(`You both played ${humanChoiceLower}`);
    } else if (humanChoiceLower == 'rock') {
        if (computerChoice == 'scissors') {
            humanScore += 1;
            console.log("You win! Rock beats Scissors");
        } else {
            computerScore += 1;
            console.log("You lose! Paper beats Rock")
        }
    } else if (humanChoiceLower == 'paper') {
        if (computerChoice == 'rock') {
            humanScore += 1;
            console.log("You win! Paper beats Rock");
        } else {
            computerScore += 1;
            console.log("You lose! Scissors beats Paper")
        }
    } else if (humanChoiceLower == 'scissors') {
        if (computerChoice == 'paper') {
            humanScore += 1;
            console.log("You win! Scissors beats Paper");
        } else {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors")
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);

