function computerPlays (){
    let cpuPlay = ["Rock","Paper","Scissors"];
    return cpuPlay[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === computerSelection){
        console.log("There's a DRAW!!!!");
        return;
    }

    switch(playerSelection){
        case "Rock":
            if (computerSelection === "Paper")
                console.log("You lose. CPU chooses Paper");
            else
                console.log("You Win. CPU chooses Scissor");
        break;
        case "Paper":
            if (computerSelection === "Scissor")
            console.log("You lose. CPU chooses Scissor");
        else
            console.log("You Win. CPU chooses Rock");
        break;
        case "Scissor":
            if (computerSelection === "Rock")
            console.log("You lose. CPU chooses Rock");
        else
            console.log("You Win. CPU chooses Paper");
        break;
        default:
            console.log("You must choose Rock, Paper or Scissor");
        break;
    }
}

function game (){
    for(let i=1;i<=5;i++){
        console.log(`Game N°${i}`);
        playRound(prompt("Choose Rock, Paper or Scissor."),computerPlays());
    }

    return 0;
}

game();