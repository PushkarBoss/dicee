var player1 = prompt("player 1 name?");
var player2 = prompt("player 2 name?");

document.querySelector(".p1").innerHTML = player1;
document.querySelector(".p2").innerHTML = player2;

// DICE ROLL

var diceRoll1 = Math.floor(Math.random()*6) + 1;
var diceRoll2 = Math.floor(Math.random()*6) + 1;

var image1 = "images/dice"+ diceRoll1 +".png";
var image2 = "images/dice"+ diceRoll2 +".png";

document.querySelector(".dice .img1").setAttribute("src",image1);
document.querySelector(".dice .img2").setAttribute("src",image2);

if (diceRoll1 == diceRoll2) {
  document.querySelector("h1").innerHTML = "It's a Draw!";
} else if (diceRoll1 > diceRoll2){
  document.querySelector("h1").innerHTML = player1 + " wins!👑";
} else {
    document.querySelector("h1").innerHTML = "👑" + player2 + " wins!";
}

if (diceRoll1 > diceRoll2) {
    document.querySelector(".Refresh").innerHTML.style.fontSize = '3rem';
}
