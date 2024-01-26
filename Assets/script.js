let rock = document.getElementById("rockbtn");
let paper = document.getElementById("paperbtn");
let scissor = document.getElementById("scissorbtn");
let yourch  = document.getElementById("yourchoice");
let compch  = document.getElementById("compchoice");
let reset = document.getElementById("resetbtn");
let result = document.getElementById("resultbox");
let yoursc = document.getElementById("yourscore");
let compsc = document.getElementById("computerscore");
let yourpts = 0;
let comppts = 0;

rock.onclick = function(){
    let random = Math.round(Math.random() * 2);
    if(random == 0){
        yourch.innerHTML = "You : ✊";
        result.textContent = "Draw";
        compch.textContent = "✊ : Computer"
    }
    else if(random == 1){
        yourch.innerHTML = "You : ✊";
        result.textContent = "Computer Won!";
        compch.textContent = "✋ : Computer";
        comppts+=1;
        compsc.textContent = `Computer : ${comppts}`

    }
    else if(random == 2){
        yourch.innerHTML = "You : ✊";
        result.textContent = "You Won!";
        compch.textContent = "✌️ : Computer";
        yourpts+=1;
        yoursc.textContent = `You : ${yourpts}`
    }
}
paper.onclick = function(){
    let random = Math.round(Math.random() * 2);
    if(random == 0){
        yourch.innerHTML = "You : ✋";
        result.textContent = "You Won!";
        compch.textContent = "✊ : Computer";
        yourpts+=1;
        yoursc.textContent = `You : ${yourpts}`
    }
    else if(random == 1){
        yourch.innerHTML = "You : ✋";
        result.textContent = "Draw";
        compch.textContent = "✋ : Computer";
    }
    else if(random == 2){
        yourch.innerHTML = "You : ✋";
        result.textContent = "Computer Won!";
        compch.textContent = "✌️ : Computer"
        comppts+=1;
        compsc.textContent = `Computer : ${comppts}`
    }
}
scissor.onclick = function(){
    let random = Math.round(Math.random() * 2);
    if(random == 0){
        yourch.innerHTML = "You : ✌️";
        result.textContent = "Computer Won";
        compch.textContent = "✊ : Computer";
        comppts+=1;
        compsc.textContent = `Computer : ${comppts}`
    }
    else if(random == 1){
        yourch.innerHTML = "You : ✌️";
        result.textContent = "You Won!";
        compch.textContent = "✋ : Computer";
        yourpts+=1;
        yoursc.textContent = `You : ${yourpts}`
    }
    else if(random == 2){
        yourch.innerHTML = "You : ✌️";
        result.textContent = "Draw";
        compch.textContent = "✌️ : Computer";
    }
}
reset.onclick =  function(){
    yourpts=0;
    comppts=0;
    compsc.textContent = `Computer : ${comppts}`;
    yoursc.textContent = `You : ${yourpts}`;
}