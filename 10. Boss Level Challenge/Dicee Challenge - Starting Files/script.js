
function randomNumber(){
    var randomness = Math.random(); // Value will be between 0 till 0.9999
    // console.log(randomness);
    var randomValue = Math.floor((randomness*6)) + 1;   // Multiply by six and add 1, since from 0 uptill 5 value is needed 
    // console.log(randomValue);
    return randomValue
}
firstDice = randomNumber();
secondDice = randomNumber();
console.log("Player 1: " + firstDice + "\nPlayer 2: "+ secondDice)

// DOM code lines (first check these in browser console)
document.querySelector("img.img1").setAttribute("src","./images/dice"+firstDice+".png");
document.querySelector("img.img2").setAttribute("src","./images/dice"+secondDice+".png");

if(firstDice > secondDice){
    document.querySelector("h1.result_header").innerHTML = "🚩 Player 1 Wins";
} else if(secondDice > firstDice) {
    document.querySelector("h1.result_header").innerHTML = "Player 2 Wins 🚩";
} else {
    document.querySelector("h1.result_header").innerHTML = "Draw!";
}