 
//CREATE function named getComputerChoice
function getComputerChoice() {
    //randomly returns a number using Math.random
    //const decimalNumber = Math.random();
    const result = Math.random().toFixed(2);
    //IF number is below or equal to 0.33, return "rock"
    if(result <= 0.33) {
        return "rock"; 
        // ELSE IF number is between 0.34 and 0.66, return "paper"
        } else if (result > 0.33 && result < 0.67 ) {
        return "paper";
        // ELSE return "scissors"
        } else if (result >= 0.67) {
        return "scissors";
        }
}

// CREATE a function named getHumanChoice
// function getHumanChoice() {
//      //Prompt the user for a input of one of the following three: rock. paper or scissors
//     const choice = prompt("Rock, Paper or Scissors?");
//     //Make humanChoice case-insensitive by converting input to lower case and using that during loops
//     const choice2 = choice.toLowerCase();
//     return choice2;
// }

//CREATE two variables named humanScore and computerScore
//Initialize them to both start at 0
let humanScore = 0;
let computerScore = 0;
let drawnScore = 0;
let playCount = 0;

const total = document.getElementById("total");
//CREATE a function named playRound, defining parameters as humanChoice and computerChoice
function playRound(humanSelection, computerSelection) {
    const currentRound = document.getElementById("currentRound");
    currentRound.textContent = "";
    //humanSelection = getHumanChoice();
    //computerSelection = getComputerChoice();
    //IF computerChoice is paper
    if(computerSelection === "paper") {
        //IF humanChoice is paper, return "Draw."
        if(humanSelection === "paper") {
            currentRound.textContent = "Draw";
            //console.log("Draw");
            drawnScore ++;
        //ELSE IF humanChoice is rock, return "You Lose."    
        }   else if(humanSelection === "rock") {
            //increment computerScore by 1
            currentRound.textContent = "Computer";
            //console.log("Loss.");
            computerScore ++;
        //ELSE IF humanChoice is scissors, return "You Win!"    
        }   else if(humanSelection === "scissors") {
            //increment humanScore by 1
            currentRound.textContent = "Player";
            //console.log("Win!")
            humanScore ++;
        }//IF  computerchoice is rock
    }  else if(computerSelection === "rock") {
            //IF humanChoice is paper, return "You Win!"
            if(humanSelection === "paper") {
                //increment humanScore by 1
                currentRound.textContent = "Player";
                //console.log("Win!")
                humanScore ++;
            //ELSE IF humanChoice is rock, return "Draw."    
            } else if(humanSelection === "rock") {
                currentRound.textContent = "Draw";
                //console.log("Draw");
                drawnScore ++;
            //ELSE IF humanChoice is scissors, return "You Lose."    
            } else if(humanSelection === "scissors") {
                //increment computerScore by 1
                currentRound.textContent = "Computer";
                //console.log("Loss.");
                computerScore ++;
            }//IF computerChoice is scissors
    }   else if(computerSelection === "scissors") {
            //IF humanChoice is paper, return "You Lose."
            if(humanSelection === "paper") {
                    //console.log("Loss.");
                    currentRound.textContent = "Computer";
                    //increment computerScore by 1
                    computerScore ++;
                    //ELSE IF humanChoice is rock, return "You Win!"
                }   else if(humanSelection === "rock") {
                    //increment humanScore by 1
                    currentRound.textContent = "Player";
                    //console.log("Win!")
                    humanScore ++;
                    //ELSE IF humanChoice is scissors, return "Draw.
                }   else if(humanSelection === "scissors") {
                    currentRound.textContent = "Draw"
                    //console.log("Draw");
                    drawnScore ++;
                }
    }
    if (playCount < 5){
        if (computerScore > humanScore) {
            total.textContent = "Current Frontrunner: Computer(" +
            `${computerScore}` + " to " + `${humanScore}` + ", Draw: "
            + `${drawnScore}` + ")";
        } else if(computerScore = humanScore) {
            total.textContent = "Current Frontrunner: Tied(" +
            `${computerScore}` + " to " + `${humanScore}` + ", Draw: "
            + `${drawnScore}` + ")";
        } else if(computerScore < humanScore) {
            total.textContent = "Current Frontrunner: Player(" +
            `${humanScore}` + " to " + `${computerScore}` + ", Draw: "
            + `${drawnScore}` + ")";
        }
        playCount ++;
    } else if (playCount = 5) {
        if (computerScore > humanScore) {
            total.textContent = "Final Winner: Computer!(" +
            `${computerScore}` + " to " + `${humanScore}` + ", Draw: "
            + `${drawnScore}` + ")";
        } else if(computerScore = humanScore) {
            total.textContent = "Final Winner: Tied!(" +
            `${computerScore}` + " to " + `${humanScore}` + ", Draw: "
            + `${drawnScore}` + ")";
        } else {
            total.textContent = "Final Winner!: Player(" +
            `${humanScore}` + " to " + `${computerScore}` + ", Draw: "
            + `${drawnScore}` + ")";
        }
        computerScore = 0;
        humanScore = 0;
        playCount = 0; 
        drawnScore = 0;
    }       
    // } else if (playCount > 4) {
    //     total.textContent = "";
    //     return;
    // } else {
    //     total.textContent = "";
    //     return;
    // }
}

//CREATE a function named playGame
// function playGame() {
//     //WHILE starting at 0, until counter variable is at 5, run function playRound.
//     let gameCounter = 0;
//     while(gameCounter < 5) {
//         playRound();
//         gameCounter ++;
//     }
//     //CONSOLE log both computerScore and humanScore.
//     console.log(`Computer's Score:${computerScore}\n Your Score:${humanScore}\n Times Drawn:${drawnScore}`);  
//     //IF computerScore > humanScore            
//     if(computerScore > humanScore) {
//         //PRINT "You Lost!"
//         console.log("You Lost!");
//         alert("You Lost!");
//         //ELSE IF 
//     }   else if (computerScore === humanScore) {
//         console.log("You Draw!");
//         alert("Draw!");
//     }   else {
//         console.log("You Win!")
//         alert ("You Win!")
//     }
// }

// Create a button that listens to each button
const rock = document.getElementById("rock");
rock.addEventListener('click', function(e) {
    //Play one round 
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});

const scissors = document.getElementById("scissors");
scissors.addEventListener('click', function(e) {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
});

const paper = document.getElementById("paper");
paper.addEventListener('click', function(e) {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});
