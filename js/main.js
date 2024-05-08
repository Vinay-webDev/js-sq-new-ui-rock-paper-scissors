// rock👊paper✋scissors✌️

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;
// playGame funtion🎮

function playGame (playerChoice) {
    // for the index[] we need to generate random number from 0-2
    const computerChoice = choices[Math.floor(Math.random() *3)];
    // to make sure if this working or not we have 
    //console.log(computerChoice);
    let result = "";
    //now we'll check to see if there is matching choices
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE☮️";
    } else {
        switch (playerChoice) {
            case "rock": 
                result = (computerChoice === "scissors") ? "YOU WIN🏆":"YOU LOSE😭";
                break;
            case "paper": 
                result = (computerChoice === "rock") ? "YOU WIN🏆":"YOU LOSE😭";
                break;
            case "scissors": 
                result = (computerChoice === "paper") ? "YOU WIN🏆":"YOU LOSE😭";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    // I want result to be green when it's win and red when it's lose
    resultDisplay.classList.remove("greenText","redText");
    switch (result) {
        case "YOU WIN🏆": 
            resultDisplay.classList.add("greenText");
            playerScore++
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE😭": 
            resultDisplay.classList.add("redText");
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
















