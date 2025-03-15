function playGame(){
    const gameTime = 5
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i < gameTime; i++) {   
        // Computer Choice
        function getComputerChoice(){
            let computerChoice = Math.random();
            if (computerChoice < 0.33){
                return "Rock";
            } else if(computerChoice < 0.66){
                return "Paper";
            } else{
                return "Scissors";
            }
        }

        const computerSelection = getComputerChoice().toLocaleLowerCase();

        // Human Choice
        function getHumanChoice(){
            return window.prompt("Choose Rock, Paper, or Scissors")
        }

        const humanSelection = getHumanChoice().toLowerCase();

        // Round Logic
        function playRound(humanSelection, computerSelection){
            if(humanSelection === "rock" && computerSelection === "scissors"|| humanSelection === "paper" && computerSelection ==="rock" || humanSelection ==="scissors" && computerSelection === "paper"){
                console.log(`       You win this round, ${humanSelection} beats ${computerSelection}`)
                return "human"
            }else if(computerSelection === "rock" && humanSelection === "scissors"|| computerSelection === "paper" && humanSelection ==="rock" || computerSelection ==="scissors" && humanSelection === "paper"){
                console.log(`       The Computer won this round!, ${computerSelection} beats ${humanSelection}`)
                return "computer"
            } else if(computerSelection === humanSelection){
                console.log(`              Draw, Try another!`)
                return "tie"
            }
        }

        let winner = playRound(humanSelection, computerSelection);

        function roundScore(){
            if (winner === "human"){
                return humanScore++, `              Your Score so far is ${humanScore} `;
            }else if(winner ==="computer"){
                return computerScore++, `              The Computer's score so far is ${computerScore}`;
            }else{
                return "               No Point Awarded"
                
            }
        }
        console.log(roundScore());
    
        console.log("------------------------------------------------------------")
    }
    function gameDecider(){
        if (humanScore > computerScore){
            return `**Your Score of - ${humanScore} - beats the computer's score of - ${computerScore} -, you win this game !**`;
        }else if (computerScore > humanScore){
            return `**The computer's score of - ${computerScore} - beats your score of - ${humanScore} -, the computer wins this one, better luck next time**`;
        }else if (computerScore === humanScore){
            return "**It's a tie!**"
        }
    }
    console.log(gameDecider());
}
playGame();