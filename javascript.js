 
//CREATE function named getComputerChoice
function getComputerChoice() {
    //randomly returns a number using Math.random
    const decimalNumber = Math.random();
    const result = decimalNumber.toFixed(5);
    console.log(result);
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

//CREATE a const humanSelection and const computerSelection

//CREATE a function named playRound, defining parameters as humanChoice and computerChoice
    //IF computerChoice is paper
    if(getComputerChoice() = "paper") {
        //IF humanChoice is paper, return "Draw."
        if(getHumanChoice() = )
        //ELSE IF humanChoice is rock, return "You Lose."
            //increment computerScore by 1
        //ELSE IF humanChoice is scissors, return "You Win!"
            //increment humanScore by 1
    }
        
    //IF  computerchoice is rock
        //IF humanChoice is paper, return "You Win!"
            //increment humanScore by 1
        //ELSE IF humanChoice is rock, return "Draw."
        //ELSE IF humanChoice is scissors, return "You Lose."
            //increment computerScore by 1
    //IF computerChoice is scissors
        //ELSE IF humanChoice is paper, return "You Lose."
            //increment computerScore by 1
        //ELSE IF humanChoice is rock, return "You Win!"
            //increment humanScore by 1
        //ELSE IF humanChoice is scissors, return "Draw.
    //

//CREATE a function named playGame
    //WHILE starting at 0, until counter variable is at 5, run function playRound.
    //CONSOLE log both computerScore and humanScore.
    //IF computerScore > humanScore
        //PRINT "You Lost!"
    //ELSE IF 
        //