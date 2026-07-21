let HumanChoice ;
let ComputerChoice ;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
   ComputerChoice= choices[randomIndex];
   return ComputerChoice;
}

function getHumanChoice(callback) {
    const choices = ['rock', 'paper', 'scissors'];
    let HumanChoiceNum;
    HumanChoiceNum = prompt("Enter your choice (1=rock, 2=paper, 3=scissors):");
    HumanChoice= choices[HumanChoiceNum - 1];
    return HumanChoice;
}

let HumanScore = 0;
let ComputerScore = 0;
getHumanChoice();
getComputerChoice();

playRound(HumanChoice, ComputerChoice);
function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        return "It's a tie!";
    } else if (
        (getHumanChoice == 'rock' && getComputerChoice == 'scissors') ||
        (getHumanChoice == 'paper' && getComputerChoice == 'rock') ||
        (getHumanChoice == 'scissors' && getComputerChoice == 'paper')
          ) {
        HumanScore++;
        console.log("You win! " + getHumanChoice + " beats " + getComputerChoice);
    } else {
        ComputerScore++;
        console.log(`You lose! ${getComputerChoice} beats ${getHumanChoice}`);
    }
}  