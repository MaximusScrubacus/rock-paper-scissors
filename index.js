
// Player Choice

let playerPrompt = window.prompt("Choose Between Rock, Paper, or Scissors");
let playerChoice = playerPrompt.toLowerCase();
function playerChoiceReadout(){
    return "You Chose" + " " + playerPrompt;
}

let playerConsoleReadout = playerChoiceReadout();
console.log(playerConsoleReadout);

// Computer Choice
function computerChoice (){
        let randomNum = Math.random();
        if (randomNum < 0.33){
            return "Rock";
        } else if(randomNum < 0.66){
            return "Paper";
        }else{
            return "Scissors";
        }
    }

let computerChoiceReadout = computerChoice();
function computerReadout(){
    return "Computer Chose" + " " + computerChoiceReadout;
}
let computerRoll = computerReadout();
console.log(computerRoll)




function roundWinner(){
    if (playerChoice == computerChoice){
       return "Draw";
    }else{
        return "You lose this round";
    }
}
let roundWin = roundWinner();

console.log(roundWinner())
// alert(roundWin);
 