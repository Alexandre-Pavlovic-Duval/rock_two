let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        console.log("Rock");
    } else if (choice === 1) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    };

};

let computerAnswer = getComputerChoice();

let humanQuestion = prompt("Rock, Paper, Scissors?");

const getHumanChoice = (HumanChoice) => {

    if (HumanChoice === "Rock") {
        console.log("Rock");
    } else if (HumanChoice === "Paper") {
        console.log("Paper");
    } else if (HumanChoice === "Scissors") {
        console.log("Scissors");
    } else {
        console.log("Choice not in the game");
    }
};

let humanAnswer = getHumanChoice(humanQuestion);

function playRound(humanChoice, computerChoice) {
    
};
playRound(humanAnswer,computerAnswer);