const btn = document.getElementById('ruleBT');
const rule = document.getElementsByClassName('rule'); 
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const image = document.getElementById('comInput');
const cl = document.getElementById('close');
const Brock = document.getElementById('Brock');
const Bpaper = document.getElementById('Bpaper');
const Bscissor = document.getElementById('Bscissor');
const result = document.getElementById('result');
const Y_score = document.getElementById('Yscore');
const C_score = document.getElementById('Cscore');
const replay = document.getElementById('replay');
const all = document.getElementById('all');
const end = document.getElementById('end');
const final = document.getElementById('final');

var Yscore = 0;
var Cscore = 0;

btn.addEventListener("click", function() {
    hideRule();
  });

cl.addEventListener("click", function(){
    hideRule();
});

// Hide the rule
function hideRule(){
    for (let i = 0; i < rule.length; i++) {
        if (rule[i].style.display === "none") {
            rule[i].style.display = "block";
        } else {
            rule[i].style.display = "none";
        }
    }
}

// Rock click
rock.addEventListener("click",function(){
    paper.style.display = "none";
    scissor.style.display = "none";
    rock.style.position = "absolute";
    rock.style.top = "210px";
    rock.style.left = "300px";

    rock.disabled = "true";
    const num = Math.floor(Math.random()*3);
    console.log(num);
    bot(num);
    
    if(num == 0){
        result.style.display = "block";
        result.innerText="YOU LOST\nAgainst PC";
        replay.style.display="block";
        replay.innerHTML = "Play Again";
        Cscore++;
        C_score.innerText = Cscore;
    }
    else if(num == 1){
        end.style.display="block";
        result.style.display = "block";
        all.style.display = "none";
        result.innerText="You wins! ";
        Yscore++;
        Y_score.innerText=Yscore;
    }
    else{
        result.style.display = "block";
        result.innerText="TIE UP";
        replay.style.display="block";
        replay.innerHTML = "Replay";
    }
});

// Code for Paper click
paper.addEventListener("click",function(){
    rock.style.display = "none";
    scissor.style.display = "none";
    paper.style.position = "absolute";
    paper.style.top = "210px";
    paper.style.left = "300px";

    paper.disabled = "true";
    const num = Math.floor(Math.random()*3);
    console.log(num);
    bot(num);
    
    if(num == 0){
        result.style.display = "block";
        result.innerText="TIE UP";
        replay.style.display="block";
        replay.innerHTML = "Replay";
    }
    else if(num == 1){
        result.style.display = "block";
        result.innerText="YOU LOST\nAgainst PC";
        replay.style.display="block";
        replay.innerHTML = "Play Again";
        Cscore++;
        C_score.innerText = Cscore;
    }
    else{
        end.style.display="block";
        result.style.display = "block";
        all.style.display = "none";
        result.innerText="You wins!";
        Yscore++;
        Y_score.innerText=Yscore;
    }
});

// Code for scissor click
scissor.addEventListener("click",function(){
    paper.style.display = "none";
    rock.style.display = "none";
    scissor.style.position = "absolute";
    scissor.style.top = "210px";
    scissor.style.left = "300px";

    scissor.disabled = "true";
    const num = Math.floor(Math.random()*3);
    console.log(num);
    bot(num);
    
    if(num == 0){
        result.style.display = "block";
        result.innerText="YOU LOST\nAgainst PC";
        replay.style.display="block";
        replay.innerHTML = "Play Again";
        Cscore++;
        C_score.innerText = Cscore;
    }
    else if(num == 1){
        result.style.display = "block";
        result.innerText="TIE UP";
        replay.style.display="block";
        replay.innerHTML = "Replay";
    }
    else{
        end.style.display="block";
        result.style.display = "block";
        result.innerText="You wins!";
        all.style.display="none";
        Yscore++;
        Y_score.innerText=Yscore;
    }
});

function bot(num){
    if(num==0){
        Bpaper.style.display = "block";
        Brock.style.display = "none";
        Bscissor.style.display = "none";
    }
    else if(num==1){
        Bpaper.style.display = "none";
        Brock.style.display = "none";
        Bscissor.style.display = "block";
    }
    else{
        Bpaper.style.display = "none";
        Brock.style.display = "block";
        Bscissor.style.display = "none";
    }
}

function playAgain(){
    rock.style.display = "block";
    paper.style.display = "block";
    scissor.style.display = "block";
    Bpaper.style.display = "none";
    Brock.style.display = "none";
    Bscissor.style.display = "none";
    replay.style.display = "none";
    result.style.display = "none";
    scissor.disabled = false;
    paper.disabled = false;
    rock.disabled = false;
    all.style.display = "block";
    end.style.display = "none";

    rock.style.top = "100px";
    rock.style.left = "600px";
    
    paper.style.top = "100px";
    paper.style.left = "300px";

    scissor.style.top = "300px";
    scissor.style.left = "450px";

}

replay.addEventListener("click",function(){
    playAgain();
});

final.addEventListener("click",function(){
    playAgain();
});
