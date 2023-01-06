let text ='rock' //user input not case sensitive
const playerSelection = text.toLowerCase()
console.log(`Your play: ${playerSelection}`)

// computer play
let computerSelection = Math.random()

if (computerSelection < .33){
    computerSelection = 'rock'
}
else if(computerSelection >.33 && computerSelection <.67){
    computerSelection ='paper'
}
else if(computerSelection >.67){
    computerSelection = 'scissors'
}
console.log(`Computer plays: ${computerSelection}`)// prints computerSelection



let declareLoser = `You lose ${computerSelection} beats ${playerSelection}! Try again.` //player loses
let declareTie = 'Tie! Try again!' //declares tie
let declareWinner = `You\'re a winner! ${playerSelection} beats ${computerSelection}`  //player wins



if ((playerSelection ==='rock' && computerSelection === 'rock')||(playerSelection=== 'paper' && computerSelection === 'paper')||(playerSelection === 'scissors' && computerSelection === 'scissors')){
    console.log(declareTie)
}

else if((playerSelection ==='rock' && computerSelection === 'scissors')||(playerSelection === 'paper' && computerSelection ==='rock')||(playerSelection === 'scissors' && computerSelection === 'paper')){
    console.log(declareWinner)
}

else if((playerSelection === 'rock' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'rock')){
    console.log(declareLoser)
}