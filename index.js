function getComputerChoice() {
    //randomly return computer's choice
    let computerSelection;
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        computerSelection = 'Rock';
    } else if (randInt === 1) {
        computerSelection = 'Paper';
    } else if (randInt === 2) {
        computerSelection = 'Scissors';
    } else {
        computerSelection = 'Error';
    }
    return computerSelection;
}

function getUserChoice() {
    let playerSelection;
    // get value of user input
    let input = document.getElementById('user-choice').value;
    // make it to lowercase
    input = input.toLowerCase();
    if (input === 'rock') {
        playerSelection = 'Rock'
    } else if (input === 'paper') {
        playerSelection = 'Paper'
    } else if (input === 'scissors') {
        playerSelection = 'Scissors'
    } else {
        alert("Check spelling and try again!");
    }
    return playerSelection;
};



function playRound(playerSelection, computerSelection) {
    //gets computer's choice
    computerSelection = getComputerChoice();
    playerSelection = getUserChoice();
    let result = '';
    
    if (computerSelection === playerSelection){
        result = `Both picked ${computerSelection.toLowerCase()}. Stalemate!`
        return result;
    } else if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || (computerSelection === 'Paper' && playerSelection === 'Rock') || (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
        result = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
        return result;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        result = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`;
        return result;
    } else {
        return "Invalid user input. Try again."
    }
    
}




submit.addEventListener('click', () => {
    let para = document.getElementById('para');
    para.textContent = playRound();
});



