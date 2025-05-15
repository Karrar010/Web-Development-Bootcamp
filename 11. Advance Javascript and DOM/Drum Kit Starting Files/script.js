// alert("JS WORKING")
// document.querySelector("button").addEventListener("click",handleclicked);
// function handleClicked(){
//     alert("Button Clicked!!");}
    
// 1. Detecting Button Press
var numberOfDrums = document.querySelectorAll(".drum").length;
// console.log(numberOfDrums);
for(var i = 0; i< numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){  // ANONYMOUS FUNCTION (without name) as input
        // console.log(this) // here this is the button that is triggered
        // this.style.color = "white"
        var buttonClicked = this.innerHTML// this shows the innerHTML of the button clicked
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}


// 2. Detecting KeyBoard Press
document.addEventListener("keydown",function(event){
    console.log(event.key); // this show the keyboard event(keyboard key) that activated this function(event listener)
    var keyClicked = event.key;
    makeSound(keyClicked);
    buttonAnimation(keyClicked);
});


// 3. Generating Appropriate Sound
function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3"); // store new audio object in variable audio
            tom1.play()    // method play will play sound
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3"); 
            tom2.play()    
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3"); 
            tom3.play() 
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3"); 
            tom4.play()    
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3"); 
            snare.play()    
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3"); 
            crash.play()    
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3"); 
            kick.play()    
            break;
        default:
            console.log(key);
    }
}

// 4. Change Animation of Button when Clicked
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed"); 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100) // Changes animation when drum part pressed and reverts it after 1 sec

}