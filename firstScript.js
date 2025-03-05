// Creating variables
let humanScore = 0;
let computerScore = 0;

// Computer choice for the game
const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    };

};

// Creation of the div displaying the results of the round
const divDisplay = document.createElement("div");
document.body.appendChild(divDisplay);

// Creation of the div for the score
const divScore = document.createElement("div");
document.body.appendChild(divScore);

// Definie the games' rules
function playRound(humanChoice, computerChoice) {
    let result = "";

    if (computerChoice === "Paper" && humanChoice === "Rock") {
        result = "You Lose! Paper beats Rock";
        computerScore ++;

    } else if (computerChoice === "Rock" && humanChoice === "Scissors" ) {
        result = "You Lose! Rock beats Scissors";
        computerScore ++;

    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        result = "You Lose! Scissors beats Paper";
        computerScore ++;

    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        result = "You Win ! Paper beats Rock";
        humanScore++;

    } else if (humanChoice === "Rock" && computerChoice === "Scissors" ) {
        result = "You Win! Rock beats Scissors";
        humanScore++;

    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        result = "You Win! Scissors beats Paper";
        humanScore++;

    } else if (humanChoice === computerChoice) {
        result = "It's a tie!";
    }

    divDisplay.textContent = result;

    if (humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore) {
            finalResult = `You Win! ${humanScore} vs ${computerScore}`;
            divDisplay.textContent = finalResult;
    
        } else if (computerScore > humanScore) {
            finalResult = `You Loose! ${computerScore} vs ${humanScore}`;
            divDisplay.textContent = finalResult;
        } else {
            finalResult = `It's a Tie! ${computerScore} vs ${humanScore}`
            divDisplay.textContent = finalResult;
        };
        divScore.textContent="";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else {
        divScore.textContent = `${humanScore} vs ${computerScore}`;
    };
};

// Creation of buttons and display to the page
const rock = document.createElement("button");
rock.textContent = "Rock";
document.body.appendChild(rock);
rock.addEventListener("click", function() {
    playRound("Rock", getComputerChoice());
});

const paper = document.createElement("button");
paper.textContent = "Paper";
document.body.appendChild(paper);
paper.addEventListener("click", function() {
    playRound("Paper", getComputerChoice());
});

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
document.body.appendChild(scissors);
scissors.addEventListener("click", function() {
    playRound("Scissors", getComputerChoice());
});