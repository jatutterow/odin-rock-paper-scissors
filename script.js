function computerPlay(){
    let selection;
    //Pick rock, paper, or scissors at random
    let selectionIndex = Math.floor(Math.random() * 3);
    if(selectionIndex == 0){
        selection = "rock";
    }
    if(selectionIndex == 1){
        selection = "paper";
    }
    if(selectionIndex == 2){
        selection = "scissors";
    }

    //return whatever got picked
    return selection;
}

function playRound(p1Selection, p2Selection){
    if(p1Selection == p2Selection){
        //tie
        return 0;
    }
    else if(p1Selection == "rock"){
        if(p2Selection == "scissors"){
            //p1 win
            return -1;
        }
        if(p2Selection == "paper"){
            //p2 win
            return 1;
        }
    }
    else if(p1Selection == "scissors"){
        if(p2Selection == "paper"){
            //p1 win
            return -1;
        }
        if(p2Selection == "rock"){
            //p2 win
            return 1;
        }
    }
    else if(p1Selection == "paper"){
        if(p2Selection == "rock"){
            //p1 win
            return -1;
        }
        if(p2Selection == "scissors"){
            //p2 win
            return 1;
        }
    }
}
//main
function game(playerSelection){
    let resultDisplay = document.querySelector('.result');
    let playerScoreDisplay = document.querySelector('.playerScore');
    let computerScoreDisplay = document.querySelector('.computerScore');
    
    let computerSelection = computerPlay();
    //Read the current score
    let playerScore = playerScoreDisplay.textContent;
    let computerScore = computerScoreDisplay.textContent;
    
    let outcome = playRound(playerSelection, computerSelection);
    let output = "";
    //Add winner to output & increase score
    if(outcome == -1){
        output += "You Win!";
        playerScore ++;
    }
    else if(outcome == 0){
        output += "Tie!";
    }
    else if(outcome == 1){
        output += "Computer Wins!";
        computerScore ++;
    }
    //Add moves to output
    output += (" Player: " + playerSelection);
    output += (", Computer: " + computerSelection);

    // Tell round winner & update scores
    resultDisplay.textContent = output;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function init(){
    let selectButtons = document.querySelectorAll('.select');
    selectButtons.forEach((button) => {
        button.addEventListener('click', playerSelect);
    });
}

function playerSelect(e){
    //Start a round, using whichever button was clicked
    game(e.target.id);
}

init();