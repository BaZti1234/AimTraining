window.addEventListener("keydown", NewLocation, false);

var score = 0;

function CircleClick(){
    document.getElementById("label_score").innerHTML = score++;

    EndGame();
}

function StartGame(e){
    document.getElementById("circle").style.opacity = "0.0";

    alert("Press Ok, then press enter to start game");

    if(e.keyCode == 13){
        NewLocation();
    }
}

function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function NewLocation(){
    document.getElementById("circle").style.opacity = "1";

    for(var i = 0; i < 1; i++){
        var newX = GetRandomInt(0,1001);
        var newY = GetRandomInt(0,501);
     
        document.getElementById("circle").style.marginLeft = newX.toString() + "px";
        document.getElementById("circle").style.marginTop = newY.toString() + "px";
     
        setTimeout(NewLocation,700);  
    }
}

function EndGame(){
    if(score == 51){
        AskForNextGame();
    }
}

function AskForNextGame(){
    let answer = confirm("Game Over. Click OK to play again, Click CANCEL to exit")

    if(answer == true){
        window.location.reload();
    }
    else{
        window.close();
    }
}
