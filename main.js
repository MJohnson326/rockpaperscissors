let text ='PAPER' //user input not case sensitive
let userInput = text.toLowerCase()
console.log(`Your play: ${userInput}`)

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
console.log(`Computer plays: ${computerSelection}`)



let declareLoser = 'You lose! Try again.' //player loses
let declareTie = 'Tie! Try again!' //declares tie
let declareWinner = 'You\'re a winner!' //player wins



if ((userInput ==='rock' && computerSelection === 'rock')||(userInput=== 'paper' && computerSelection === 'paper')||(userInput === 'scissors' && computerSelection === 'scissors')){
    console.log(declareTie)
}

else if((userInput ==='rock' && computerSelection === 'scissors')||(userInput === 'paper' && computerSelection ==='rock')||(userInput === 'scissors' && computerSelection === 'paper')){
    console.log(declareWinner)
}

else if((userInput === 'rock' && computerSelection === 'paper')||(userInput === 'paper' && computerSelection === 'scissors')||(userInput === 'scissors' && computerSelection === 'rock')){
    console.log(declareLoser)
}