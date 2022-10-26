// computer play that is randomly generated each time called
function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    //console.log(geRandomValue);
    if (getRandomValue <= 0.33) {
        //console.log(rock);
        return rock;
    } else if (getRandomValue <= 0.66) {
        //console.log(paper);
        return paper;
    } else {
        //console.log(scissors)
        return scissors;
    }
}

// the game start 
function game () {
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

     //loop through the five rounds, track the rounds and wins
    while (roundsPlayed < 5) {
        roundsPlayed++;
        const computerSelection = computerPlay();
        playerSelection = prompt ("Player, please type in your selection (Rock, Paper, or Scissors)! ")
        console.log(playRound(capitalize(playerSelection), computerSelection));
        //console.log(roundsPlayed);
        console.log("Player win totals" + playerWin);
        console.log("Computer win totals " + computerWin);

        //play the round and determine winner
        function playRound(firstLetterCap, computerSelection) {
            let tie = "It's  a Tie! You selected" + firstLetterCap + ""
            let paperBeatRock = " You Win! You selected " +  firstLetterCap + " and the computer selected " + computerSelection + ".";
            let scissorsBeatPaperLoss = " You Lose! You Selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let paperBeatsRockLoss = " You Lose! You Selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let rockBeatScissors = " You Win! You Selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let rockBeatScissorsLoss = "  You Lose! You selected " + firstLetterCap + " and the computer selected " + computerSelection + '.';
            let scissorsBeatPaper = " You Win! You Selected " + firstLetterCap + " and the computer selected " + computerSelection + '.';

            if (firstLetterCap === computerSelection) {
                return tie;
            } else if ((firstLetterCap === "Paper ") && (computerSelection === "Rock")) {
                playerWin++;
                return paperBeatRock;
            } else if ((firstLetterCap === "Paper ") && (computerSelection === "Scissors")) {
                computerWin++;
                return scissorsBeatPaperLoss;
            }  else if ((firstLetterCap === "Rock ") && (computerSelection === "Paper")) {
                computerWin++;
                return paperBeatsRockLoss
            } else if ((firstLetterCap === "Rock ") && (computerSelection === "Scissors")) {
                playerWin ++;
                return rockBeatScissors;
            } else if ((firstLetterCap === "Scissors ") && (computerSelection === "Rock")) {
                computerWin ++; 
                return rockBeatScissorsLoss;
             } else {
                playerWin ++;
                return scissorsBeatPaper
            }
        }
    } 
    // determine who won the five round  set
    if (playerWin > computerWin) {
        gameWinner = "You Win!";
    } else if (playerWin === computerWin) {
        hameWinner = "Tie!";
    } else {
        gameWinner = "COMPUTER WINS!";
    }

    // write out the winter to the screen
    console.log ("The five game winner is: " + gameWinner);
}

//function to format/capitalize the input
function capitalize(playerSelection) {
    let allLowerCase = playerSelection.toLowerCase();
    let firstLetterCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice()
    //console.log(firstLetterCap);
    return firstLetterCap;
}

 // function call to start the game
 game();