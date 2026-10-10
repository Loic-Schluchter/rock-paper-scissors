
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


function playGame(){



    const playBtn = document.querySelectorAll("button");
    const body = document.querySelector("body");
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");

    //Initializing Scores
    let humanScore = 0;
    let computerScore = 0;

    if (humanScore === 5){
        body.appendChild(div);
        p4.textContent = `Human Wins !`
        div.append(p4);
    }
    else if (computerScore === 5){
        body.appendChild(div);
        p4.textContent = `Computer Wins !`
        div.append(p4);
    }


    //Initializing buttons
    playBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            playRound(
                btn.textContent.toLowerCase(),
                getComputerChoice()
            );
        });
    });

    //Comparison of Results
    function playRound(userChoice, computerChoice){

            if (userChoice === "rock"){
                if (computerChoice === "paper"){
                    computerScore += 1
                }
                else if (computerChoice === "rock"){
                    alert("It's a draw ! Nobody wins")
                }
                else if (computerChoice === "scissors"){
                    humanScore += 1
                }
            }
            else if (userChoice === "paper"){
                if (computerChoice === "paper"){
                    alert("It's a draw ! Nobody wins")
                }
                else if (computerChoice === "rock"){
                    humanScore += 1
                }
                else if (computerChoice === "scissors"){
                    computerScore += 1
                }
            }
            else if (userChoice === "scissors"){
                if (computerChoice === "paper"){
                    humanScore += 1
                }
                else if (computerChoice === "rock"){
                    computerScore += 1
                }
                else if (computerChoice === "scissors"){
                    alert("It's a draw ! Nobody wins")
                }
            }
            //Displays the score window
            p1.textContent = `Player score : ${humanScore}`;
            p2.textContent = `||`
            p3.textContent = `Computer score : ${computerScore}`
            div.classList.add("game-container")
            div.append(p1,p2,p3);
            body.appendChild(div);
            if (humanScore >= 5 || computerScore >= 5) {
                p4.textContent = humanScore >= 5
                    ? "Human Wins!"
                    : "Computer Wins!";

                div.appendChild(p4);
                playBtn.forEach((btn) => {
                    btn.disabled = true;
                });
            }

            }
}
//Play all 5 rounds

playGame()




