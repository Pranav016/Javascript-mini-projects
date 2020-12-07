var heading=document.querySelector("h1");
var ele=document.getElementsByTagName("img");
var dice1= Math.ceil(Math.random()*6);
var dice2= Math.ceil(Math.random()*6);
ele[0].setAttribute("src",("images/dice"+dice1+".png"))
ele[1].setAttribute("src",("images/dice"+dice2+".png"))
if (dice1===dice2){
    heading.innerHTML="Draw!"
}
else if(dice1>dice2){
    heading.innerHTML="Player 1 wins!"
}
else{
    heading.innerHTML="Player 2 wins!"
}