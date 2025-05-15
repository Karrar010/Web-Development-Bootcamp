var buttonColours = ["red","blue","green","yellow"];
var randomnumber = 0
var randomChosenColour = 0
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false

function nextSequence(){ 
    level += 1;
    $("#level-title").text("Level "+level);
    randomnumber = (Math.random())*4
    randomnumber = Math.floor(randomnumber);
    randomChosenColour = buttonColours[randomnumber];
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
function playSound(name){
    soundAddress = "sounds/"+name+".mp3"
    var audio = new Audio(soundAddress);
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success")
        if(userClickedPattern.length === gamePattern.length){
            console.log("Finished Sequence")
            setTimeout(function() { nextSequence(); }, 1000);
            userClickedPattern = []
        }
    }
    else{ 
        console.log("Wrong")
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)
        $("#level-title").text("Game Over, Press Any Key to Restart")
        startover()
    } 
}
function startover(){
    level = 0;
    userClickedPattern = []
    gamePattern = [];
    started = false;
}
$(document).keypress(function(event){
    if(!started){
        nextSequence()
        $("#level-title").text("Level "+level);
        started = true
    }
})

$(".btn").on("click",function(event){
    var userChosenColour = event.target.id
    userClickedPattern.push(userChosenColour)
    animatePress(userChosenColour)
    playSound(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
})
