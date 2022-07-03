var cpu = 0, human = 0, draw = 0;

function computerPlays (){
    let cpuPlay = ["Rock","Paper","Scissor"];
    return cpuPlay[Math.floor(Math.random() * 3)];
}

function wins (selector,winner){
    document.getElementById(selector).innerHTML = `${selector}: ${winner}`;
}

function reset () {
    human = 0;
    cpu = 0;
    draw = 0;

    wins("Human",human);
    wins("CPU",cpu);
    wins("Draws",draw);
}

function check() {
    if(human === 5){
        console.log("Human wins!");
        alert("You have won.");
        reset();
        return 1;
    }

    if (cpu === 5){
        console.log("CPU wins!");
        alert("CPU wins!");
        reset();
        return 1;
    }

    return 0;
}

function playRound(playerSelection,computerSelection){
    playerSelection =   playerSelection.charAt(0).toUpperCase() 
                        + playerSelection.slice(1);

    if (playerSelection === computerSelection){
        console.log("There's a DRAW!!!!");
        wins("Draws",++draw);
        return;
    }

    switch(playerSelection){
        case "Rock":
            if (computerSelection === "Paper"){
                console.log("You lose. CPU chooses Paper");
                wins("CPU",++cpu);
            }
            else{
                console.log("You Win. CPU chooses Scissor");
                wins("Human",++human);
            }
        break;
        case "Paper":
            if (computerSelection === "Scissor")
            {
                wins("CPU",++cpu);
                console.log("You lose. CPU chooses Scissor");
            }
        else{
            console.log("You Win. CPU chooses Rock");
            wins("Human",++human);
        }
        break;
        case "Scissor":
            if (computerSelection === "Rock"){
                console.log("You lose. CPU chooses Rock");
                wins("CPU",++cpu);
            }
        else{
            console.log("You Win. CPU chooses Paper");
            wins("Human",++human);
        }
        break;
        default:
            console.log("You must choose Rock, Paper or Scissor");
        break;
    }

    if( check() ){
    }
}

function game (){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id,computerPlays());
        });
        
    });
}

game();
