
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
let computerRoll = computerChoiceReadout
let computerRolls = computerReadout();
console.log(computerRolls)

// Round Win Function

function roundWinner(){
    if (playerChoice === "rock" && computerRoll === "Scissors"){
       return "Player Wins!";} 
       else if(playerChoice === "rock" && computerRoll === "Paper"){
        return "You lose this round!, try again !!!";
       } 
       else if(playerChoice === "rock" && computerRoll === "Rock"){
        return "Draw!"
       } 
       else if (playerChoice === "paper" && computerRoll === "Rock"){
        return "Player Wins!";} 
        else if(playerChoice === "paper" && computerRoll === "Scissors"){
         return "You lose this round!, try again !!!"
        }
        else if(playerChoice === "paper" && computerRoll === "Paper"){
         return "Draw!"
        }
        else if (playerChoice === "scissors" && computerRoll === "Paper"){
            return "Player Wins!";} 
            else if(playerChoice === "scissors" && computerRoll === "Rock"){
             return "You lose this round!, try again !!!"
            }
            else if(playerChoice === "scissors" && computerRoll === "Scissors"){
             return "Draw!"
            }
            else{
                return "Try Again!"
            }
    }

let roundWin = roundWinner();
console.log(roundWin)
// let roundWin = roundWinner();

// console.log(roundWinner())
 