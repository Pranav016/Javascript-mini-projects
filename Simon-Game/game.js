var buttonColors=["red", "blue", "green", "yellow"]

var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;


$(document).keypress(function (){
    if(!started){
        $("#level-title").text("Level "+level)
        nextSequence();
        started=true;
    }
});


function playSound(color){
    var audio = new Audio('sounds/'+color+'.mp3');
    audio.play();
}

function nextSequence(){
    userClickedPattern=[]
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function (){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}