
// 0 to 0.33 = rock
// 0.33 to 0.66 = paper
// 0.66 to 1 = scissors



function getComputerChoice() {


    let result = Math.random().toFixed(2)
    console.log(result)
    if (result <= 0.33) {
        return "rock";
    }
    if (result >= 0.33 && result <= 0.66) {
        return "paper";
    }
    if (result >= 0.66){
        return "scissors";
    }
}

function getUserChoice(){
    return prompt("rock, paper or scissors ?");
}

function playGame(){
    //Initializing Scores
    var humanScore = 0;
    var computerScore = 0;

    //Start of the loop
    for (let i = 0; i < 5; i++) {

        //Retrieving Results
        const userChoice = getUserChoice().toLowerCase();
        const computerChoice = getComputerChoice();


        //Comparison of Results
        function playRound(userChoice, computerChoice){

            if (userChoice === "rock"){
                if (computerChoice === "paper"){
                    alert("You lose ! Paper beats Rock")
                    computerScore += 1
                }
                else if (computerChoice === "rock"){
                    alert("Nobody wins !")
                }
                else if (computerChoice === "scissors"){
                    alert("You win ! Rock beats Scissors")
                    humanScore += 1
                }
            }
            else if (userChoice === "paper"){
                if (computerChoice === "paper"){
                    alert("Nobody wins !")
                }
                else if (computerChoice === "rock"){
                    alert("You win ! Paper beats Rock")
                    humanScore += 1
                }
                else if (computerChoice === "scissors"){
                    alert("You lose ! Scissors beats Paper")
                    computerScore += 1
                }
            }
            else if (userChoice === "scissors"){
                if (computerChoice === "paper"){
                    alert("You win ! Scissors beats Paper")
                    humanScore += 1
                }
                else if (computerChoice === "rock"){
                    alert("You lose ! Rock beats scissors")
                    computerScore += 1
                }
                else if (computerChoice === "scissors"){
                    alert("Nobody wins !")

                }
            }

            //Displays the score window
            window.alert(`User score : ${humanScore} || Computer score : ${computerScore} \n Remaining rounds : ${4 - i}`);
        }
        //Start the game round
        playRound(userChoice, computerChoice);
    }
    alert(`Final score : \n Human : ${humanScore} || Computer : ${computerScore}`);
    if (humanScore > computerScore){
        alert("You win the game !")
    }
    else if (computerScore > humanScore){
        alert ("You lose the game !")
    }
    else{
        alert("Nobody wins – it’s a draw!")
    }
}
//Play all 5 rounds
playGame()




