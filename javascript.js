 
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
console.log(getComputerChoice());

// CREATE a function named getHumanChoice
    //Prompt the user for a input of one of the following three: rock. paper or scissors
    