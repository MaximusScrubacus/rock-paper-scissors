// Disabled for now.
// for(let i = 0; i < 20;){

// let playerPrompt = window.prompt("Choose Between Rock, Paper, or Scissors");
// let playerChoice = playerPrompt.toLowerCase();
// function playerChoiceReadout(){
//     return "You Chose" + " " + playerPrompt;
// }

// let playerConsoleReadout = playerChoiceReadout();
// console.log(playerConsoleReadout);

// // Computer Choice
// function computerChoice (){
//         let randomNum = Math.random();
//         if (randomNum < 0.33){
//             return "Rock";
//         } else if(randomNum < 0.66){
//             return "Paper";
//         }else{
//             return "Scissors";
//         }
//     }

// let computerChoiceReadout = computerChoice();
// function computerReadout(){
//     return "Computer Chose" + " " + computerChoiceReadout;
// }
// let computerRoll = computerChoiceReadout
// let computerRolls = computerReadout();
// console.log(computerRolls)

// // Round Win Function

// function roundWinner(){
//     if (playerChoice === "rock" && computerRoll === "Scissors"){
//        return "Player Wins!";} 
//        else if(playerChoice === "rock" && computerRoll === "Paper"){
//         return "You lose this round!, try again !!!";
//        } 
//        else if(playerChoice === "rock" && computerRoll === "Rock"){
//         return "Draw!"
//        } 
//        else if (playerChoice === "paper" && computerRoll === "Rock"){
//         return "Player Wins!";} 
//         else if(playerChoice === "paper" && computerRoll === "Scissors"){
//          return "You lose this round!, try again !!!"
//         }
//         else if(playerChoice === "paper" && computerRoll === "Paper"){
//          return "Draw!"
//         }
//         else if (playerChoice === "scissors" && computerRoll === "Paper"){
//             return "Player Wins!";} 
//             else if(playerChoice === "scissors" && computerRoll === "Rock"){
//              return "You lose this round!, try again !!!"
//             }
//             else if(playerChoice === "scissors" && computerRoll === "Scissors"){
//              return "Draw!"
//             }
//             else{
//                 return "Try Again!"
//             }
//     }

// let roundWin = roundWinner();


// }
// console.log(roundWin)
// function playerScore(){

//     if(roundWin === "Player Wins!") {
//         return p++
        
//     } else if(roundWin === "You lose this round!, try again !!!"){
//         return c++
//     } else{
//         return "Play Another!"
//     }
// }




let humanScore = 0
let computerScore = 0



let getHumanChoice = window.prompt ("Chose Rock, Paper, or Scissors!")
const humanChoice = getHumanChoice.toLowerCase();
console.log("You Chose " + "" + getHumanChoice);


const computerSelection = getComputerChoice();
let computerChoice = computerSelection;

function getComputerChoice(){
    let choice = Math.random(); 
    if (choice < 0.33){
        return "Rock"
    }else if(choice < 0.66){
        return "Scissors"
    }else{
        return "Paper"
    }
}

    console.log("Computer Chose " + "" +computerSelection)  ;


function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "Scissors"){
               return "Player Wins!";} 
               else if(humanChoice === "rock" && computerChoice === "Paper"){
                return "You lose this round!, try again !!!";
               } 
               else if(humanChoice === "rock" && computerChoice === "Rock"){
                return "Draw!";
               } 
               else if (humanChoice === "paper" && computerChoice === "Rock"){
                return "Player Wins!";} 
                else if(humanChoice === "paper" && computerChoice === "Scissors"){
                 return "You lose this round!, try again !!!";
                }
                else if(humanChoice === "paper" && computerChoice === "Paper"){
                 return "Draw!";
                }
                else if (humanChoice === "scissors" && computerChoice === "Paper"){
                    return "Player Wins!";} 
                    else if(humanChoice === "scissors" && computerChoice === "Rock"){
                     return "You lose this round!, try again !!!";
                    }
                    else if(humanChoice === "scissors" && computerChoice === "Scissors"){
                     return "Draw!";
                    }
                    else{
                        return "Try Again!";
                    }
}

const roundCallout = playRound(humanChoice, computerChoice);

function scoreValue(roundCallout){
    if(roundCallout === "Player Wins!" ){
        return ++humanScore;
    }else if(roundCallout ==="You lose this round!, try again !!!"){
        return ++computerScore;
    }else{
        return null;
    }
}

        console.log(roundCallout);

        alert(humanScore);
        alert(computerScore);