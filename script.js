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

function playerPlay(){
    let selection = prompt("Rock, paper, scissors.");
    selection = selection.toLowerCase();

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
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let output;

    for(let i = 0; i < 5; i++){
        //each player chooses
        let playerSelection = playerPlay()
        let computerSelection = computerPlay()
        //find who wins
        let outcome = playRound(playerSelection, computerSelection);
        //construct output string & tally score
        output = "";

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

        output += (" Player: " + playerSelection);
        output += (", Computer: " + computerSelection);

        //Tell round winner
        console.log(output);
    }
    output = "";
    //Determine match winner & construct output string
    if(playerScore > computerScore){
        output += "You won the match!";
    }
    if(playerScore == computerScore){
        output += "It's a tie!";
    }
    if(playerScore < computerScore){
        output += "The computer won the match!";
    }

    output += (" Player Score: " + playerScore);
    output += (", Computer Score: " + computerScore);

    //Announce winner & scores
    console.log(output);
}

game();