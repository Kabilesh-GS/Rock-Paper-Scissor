let yourch  = document.getElementById("yourchoice");
let compch  = document.getElementById("compchoice");
let result = document.getElementById("resultbox");
let yoursc = document.getElementById("yourscore");
let compsc = document.getElementById("computerscore");
let emoji = document.getElementById("emojibox");
let score = JSON.parse(localStorage.getItem('scores')) || {
    yourscore: 0,
    compscore: 0
}

new kursor({
    type: 1
})

function reset(){
    score = {
        yourscore: 0,
        compscore: 0
    }
    localStorage.removeItem('scores');
}

function Computer(){
    let random = Math.round(Math.random()*2);
    let compchoise = '';
    if(random == 0){
        compchoise ='rock';
    }
    else if(random == 1){
        compchoise ='paper';
    }
    else if(random == 2){
        compchoise ='scissor';
    }
    return compchoise;
}
function Play(choice){
    let comp = Computer();
    if(choice == 'rock'){
        if(comp == choice){
            yourch.innerHTML = "You : ✊";
            result.textContent = "Draw";
            compch.textContent = "✊ : Computer"
            emoji.textContent = "🟰";
        }
        else if(comp == 'paper'){
            yourch.innerHTML = "You : ✊";
            result.textContent = "Computer Won!";
            compch.textContent = "✋ : Computer";
            emoji.textContent = "🤖";
            score.compscore += 1;
            compsc.textContent = `Computer : ${score.compscore}`;
        }
        else if(comp == 'scissor'){
            yourch.innerHTML = "You : ✊";
            result.textContent = "You Won!";
            compch.textContent = "✌️ : Computer";
            emoji.textContent = "👦";
            score.yourscore+=1;
            yoursc.textContent = `You : ${score.yourscore}`;
        }
    }
    if(choice == 'paper'){
        if(comp == choice){
            yourch.innerHTML = "You : ✋";
            result.textContent = "Draw";
            compch.textContent = "✋ : Computer";
            emoji.textContent = "🟰";
        }
        if(comp == 'rock'){
            yourch.innerHTML = "You : ✋";
            result.textContent = "You Won!";
            compch.textContent = "✊ : Computer";
            emoji.textContent = "👦";
            score.yourscore+=1;
            yoursc.textContent = `You : ${score.yourscore}`;
        }
        if(comp == 'scissor'){
            yourch.innerHTML = "You : ✋";
            result.textContent = "Computer Won!";
            compch.textContent = "✌️ : Computer"
            emoji.textContent = "🤖";
            score.compscore+=1;
            compsc.textContent = `Computer : ${score.compscore}`;
        }
    }
    if(choice == 'scissor'){
        if(comp == choice){
            yourch.innerHTML = "You : ✌️";
            result.textContent = "Draw";
            compch.textContent = "✌️ : Computer";
            emoji.textContent = "🟰";
        }
        if(comp == 'rock'){
            yourch.innerHTML = "You : ✌️";
            result.textContent = "Computer Won";
            compch.textContent = "✊ : Computer";
            emoji.textContent = "🤖";
            score.compscore+=1;
            compsc.textContent = `Computer : ${score.compscore}`;
        }
        if(comp == 'paper'){
            yourch.innerHTML = "You : ✌️";
            result.textContent = "You Won!";
            compch.textContent = "✋ : Computer";
            emoji.textContent = "👦";
            score.yourscore+=1;
            yoursc.textContent = `You : ${score.yourscore}`;
        }
    }
    let JSONscore = JSON.stringify(score);
    localStorage.setItem('scores',JSONscore);
}