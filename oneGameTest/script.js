function computerPlay() { 
    let options = ['rock', 'paper','scissors']
    return options[Math.floor(Math.random()* options.length)]
}
let computerScore = 0
let playerScore = 0


function playRound(playerSelection, computerSelection) {
let result = ''
if ((playerSelection == 'rock' && computerSelection == 'scissors') ||(playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
    playerScore++;
    return result = `You win! ${playerSelection} beats ${computerSelection}`
} else if (computerSelection == playerSelection) {
    return result = `It's a tie! You both choose ${computerSelection}`
} else 
    computerScore++;
    return result = `You lose! ${computerSelection} beats ${playerSelection}.`
}

function game() {
for (let i=0; i< 5; i++) {
    let playerSelection = prompt("Choose paper, rock or scissors")
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))
}
if (playerScore >= 3) {
    console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
} else if (computerScore >= 3) {
    console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
} else
    console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);

}
game();



