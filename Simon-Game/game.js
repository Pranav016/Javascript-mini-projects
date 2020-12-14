var buttonColors=["red", "blue", "green", "yellow"]

var gamePattern=[];
var userClickedPattern=[];
level=0;


$(document).keypress(nextSequence());


function playSound(color){
    if (buttonColors.indexOf(color)===-1){
        var audio = new Audio('sounds/wrong.mp3');
    }
    else{
        var audio = new Audio('sounds/'+color+'.mp3');
    }
    audio.play();
}

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}


$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
});

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed");
    },100);
}