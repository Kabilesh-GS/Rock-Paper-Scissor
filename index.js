const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const choisebut = document.querySelectorAll(".choisebut");
let player;
let computer;
let result;

choisebut.forEach(button => button.addEventListener("click", () => {
    
    player = button.textContent;
    computerTurn();
    playertext.textContent = `player: ${player}` ;
    computertext.textContent = `Computer: ${computer}`;
    resulttext.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSOR";
            break;    
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You Win" : "You Lose"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSOR") ? "You Win" : "You Lose"
    }
    else if(computer == "SCISSOR"){
        return (player == "ROCK") ? "You Win" : "You Lose"
    }  
}