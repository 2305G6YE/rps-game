 
//CREATE function named getComputerChoice
function getComputerChoice() {
    //randomly returns a number using Math.random
    const decimalNumber = Math.random();
    const result = decimalNumber.toFixed(5);
    //IF number is below or equal to 0.33, return "rock"
    if(result <= 0.33) {
        return "rock"; 
        // ELSE IF number is between 0.34 and 0.66, return "paper"
        } else if (result > 0.33 && result < 0.67 ) {
        return "paper";
        // ELSE return "scissors"
        } else if (result => 0.67) {
        return "scissors";
        }
}

// CREATE a function named getHumanChoice
function getHumanChoice() {
     //Prompt the user for a input of one of the following three: rock. paper or scissors
    const choice = prompt("Rock, Paper or Scissors?");
    //Make humanChoice case-insensitive by converting input to lower case and using that during loops
    const choice2 = choice.toLowerCase();
    return choice2;
}

//CREATE two variables named humanScore and computerScore
//Initialize them to both start at 0
let humanScore = 0;
let computerScore = 0;
let drawnScore = 0;

//CREATE a function named playRound, defining parameters as humanChoice and computerChoice
function playRound(humanSelection, computerSelection) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
     //IF computerChoice is paper
    if(computerSelection === "paper") {
        //IF humanChoice is paper, return "Draw."
        if(humanSelection === "paper") {
            console.log("Draw");
            drawnScore += 1;
        //ELSE IF humanChoice is rock, return "You Lose."    
        }   else if(humanSelection === "rock") {
            //increment computerScore by 1
            console.log("Loss.");
            computerScore += 1;
        //ELSE IF humanChoice is scissors, return "You Win!"    
        }   else if(humanSelection === "scissors") {
            //increment humanScore by 1
            console.log("Win!")
            humanScore += 1;
        }//IF  computerchoice is rock
    }   else if(computerSelection === "rock") {
            //IF humanChoice is paper, return "You Win!"
            if(humanSelection === "paper") {
                //increment humanScore by 1
                console.log("Win!")
                humanScore += 1;
            //ELSE IF humanChoice is rock, return "Draw."    
            } else if(humanSelection === "rock") {
                console.log("Draw");
                drawnScore += 1;
            //ELSE IF humanChoice is scissors, return "You Lose."    
            } else if(humanSelection === "scissors") {
                //increment computerScore by 1
                console.log("Loss.");
                computerScore += 1;
            }//IF computerChoice is scissors
        }   else if(computerSelection === "scissors") {
            //IF humanChoice is paper, return "You Lose."
            if(humanSelection === "paper") {
                console.log("Loss.");
                //increment computerScore by 1
                computerScore += 1;
                //ELSE IF humanChoice is rock, return "You Win!"
            }   else if(humanSelection === "rock") {
                //increment humanScore by 1
                console.log("Win!")
                humanScore += 1;
                //ELSE IF humanChoice is scissors, return "Draw.
            }   else if(humanSelection === "scissors") {
                console.log("Draw");
                drawnScore += 1;
            }
    }
}

//CREATE a function named playGame
function playGame() {
    //WHILE starting at 0, until counter variable is at 5, run function playRound.
    let gameCounter = 0;
    while(gameCounter < 5) {
        playRound();
        gameCounter += 1;
    }
    //CONSOLE log both computerScore and humanScore.
    console.log(`Computer's Score:${computerScore}\n Your Score:${humanScore}\n Times Drawn:${drawnScore}`);  
    //IF computerScore > humanScore            
    if(computerScore > humanScore) {
        //PRINT "You Lost!"
        console.log("You Lost!");
        alert("You Lost!");
        //ELSE IF 
    }   else if (computerScore === humanScore) {
        console.log("You Draw!");
        alert("Draw!");
    }   else {
        console.log("You Win!")
        alert ("You Win!")
    }
}

    