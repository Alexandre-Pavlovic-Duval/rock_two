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

// Make a prompt for human to choose for the game
const getHumanChoice = () => {
    let humanQuestion = prompt("Rock, Paper, Scissors?").toLowerCase();

    if (humanQuestion === "rock") {
        return "Rock";
    } else if (humanQuestion === "paper") {
        return "Paper";
    } else if (humanQuestion === "scissors") {
        return "Scissors";
    } else {
        alert("Choice not in the game, please try again");
        return getHumanChoice();
    };
};

// Starting the games' rounds
const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;
    // Definie the games' rules
    function playRound(humanChoice, computerChoice) {
        if (computerChoice === "Paper" && humanChoice === "Rock") {
            console.log("You lose! Paper beats Rock")
            computerScore ++;

        } else if (computerChoice === "Rock" && humanChoice === "Scissors" ) {
            console.log("You lose! Rock beats Scissors")
            computerScore ++;

        } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            console.log("You lose! Scissors beats Paper")
            computerScore ++;

        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You Win ! Paper beats Rock")
            humanScore++;

        } else if (humanChoice === "Rock" && computerChoice === "Scissors" ) {
            console.log("You Win! Rock beats Scissors")
            humanScore++;

        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You Win! Scissors beats Paper")
            humanScore++; 

        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        };
    };

    while (i < 5) {
        let computerAnswer = getComputerChoice();
        let humanAnswer = getHumanChoice();
        // Call the inside function
        playRound(humanAnswer,computerAnswer);
        // Increment the loop
        i++;
    }

    if (humanScore > computerScore) {
        console.log(`You Win! ${humanScore} vs ${computerScore}`)
    } else if (computerScore < humanScore) {
        console.log(`You Loose! ${computerScore} vs ${humanScore}`)
    } else {
        console.log(`It's a Tie! ${computerScore} vs ${humanScore}`)
    };
};

playGame();