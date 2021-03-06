var drums= document.querySelectorAll(".drum");

//Button animation

function buttonAnimation(char){
    var buttonClicked=document.querySelector("."+char);
    buttonClicked.classList.add("pressed");
    setTimeout(function (){
        buttonClicked.classList.remove("pressed");
    } ,100);
}

//Beats method

function beat(char){
    switch(char){
        case 'w':
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case 'a':
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case 's':
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case 'd':
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case 'j':
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case 'k':
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case 'l':
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default:
            console.log(data);
    }
    buttonAnimation(char);
}

// For click event

for(var i=0; i<drums.length;i++){
    drums[i].addEventListener("click",function (){
        var data=this.innerHTML;
        beat(data);
    })
}

// For key press

document.addEventListener("keydown",function (event){ 
    beat(event.key);
})