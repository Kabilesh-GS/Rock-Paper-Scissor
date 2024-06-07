let rock = document.getElementById("rockbtn");
let paper = document.getElementById("paperbtn");
let scissor = document.getElementById("scissorbtn");
let yourch  = document.getElementById("yourchoice");
let compch  = document.getElementById("compchoice");
let reset = document.getElementById("resetbtn");
let result = document.getElementById("resultbox");
let yoursc = document.getElementById("yourscore");
let compsc = document.getElementById("computerscore");
let emoji = document.getElementById("emojibox");
let score = {
    yourscore: 0,
    compscore: 0
}

rock.onclick = function(){
    let random = Math.round(Math.random() * 2);
    if(random == 0){
        yourch.innerHTML = "You : ✊";
        result.textContent = "Draw";
        compch.textContent = "✊ : Computer"
        emoji.textContent = "🟰";
    }
    else if(random == 1){
        yourch.innerHTML = "You : ✊";
        result.textContent = "Computer Won!";
        compch.textContent = "✋ : Computer";
        emoji.textContent = "🤖";
        score.compscore += 1;
        compsc.textContent = `Computer : ${score.compscore}`;
    }
    else if(random == 2){
        yourch.innerHTML = "You : ✊";
        result.textContent = "You Won!";
        compch.textContent = "✌️ : Computer";
        emoji.textContent = "👦";
        score.yourscore+=1;
        yoursc.textContent = `You : ${score.yourscore}`;
    }
}
paper.onclick = function(){
    let random = Math.round(Math.random() * 2);
    if(random == 0){
        yourch.innerHTML = "You : ✋";
        result.textContent = "You Won!";
        compch.textContent = "✊ : Computer";
        emoji.textContent = "👦";
        score.yourscore+=1;
        yoursc.textContent = `You : ${score.yourscore}`;
    }
    else if(random == 1){
        yourch.innerHTML = "You : ✋";
        result.textContent = "Draw";
        compch.textContent = "✋ : Computer";
        emoji.textContent = "🟰";
    }
    else if(random == 2){
        yourch.innerHTML = "You : ✋";
        result.textContent = "Computer Won!";
        compch.textContent = "✌️ : Computer"
        emoji.textContent = "🤖";
        score.compscore+=1;
        compsc.textContent = `Computer : ${score.compscore}`;
    }
}
scissor.onclick = function(){
    let random = Math.round(Math.random() * 2);
    if(random == 0){
        yourch.innerHTML = "You : ✌️";
        result.textContent = "Computer Won";
        compch.textContent = "✊ : Computer";
        emoji.textContent = "🤖";
        score.compscore+=1;
        compsc.textContent = `Computer : ${score.compscore}`;
    }
    else if(random == 1){
        yourch.innerHTML = "You : ✌️";
        result.textContent = "You Won!";
        compch.textContent = "✋ : Computer";
        emoji.textContent = "👦";
        score.yourscore+=1;
        yoursc.textContent = `You : ${score.yourscore}`;
    }
    else if(random == 2){
        yourch.innerHTML = "You : ✌️";
        result.textContent = "Draw";
        compch.textContent = "✌️ : Computer";
        emoji.textContent = "🟰";
    }
}
reset.onclick =  function(){
    score.compscore=0;
    score.yourscore=0;
    compsc.textContent = `Computer : ${score.compscore}`;
    yoursc.textContent = `You : ${score.yourscore}`;
    result.innerHTML = "You or Computer, Let's see!";
    emoji.innerHTML = "👦/🤖";
    yourch.innerHTML = "You :";
    compch.innerHTML = ": Computer";
}

new kursor({
    type: 1
})