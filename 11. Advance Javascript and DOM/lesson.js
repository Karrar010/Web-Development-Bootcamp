// #### HIGHER ORDER FUNCTION : Func that takes another func as argument ####
function add(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}

function calculate(num1,num2, operator){
    return operator(num1,num2);
}

// debugger;
console.log(calculate(4,10,divide))

// ########## This #########
// this keyword refers to an object. this is not a variable. It is a keyword. You cannot change the value of this.
// console.log(this) // here this is the button that is triggered
// this.style.color = "white"

// ########### Javascript Objects ###########
// SyntaX: var objectName = {
//     variables : value ;
// }
// E.G:
var housekeeper1 = {
    name : "Jane",
    yearsExp : 9,
    cleaningRepertoire : ["bathroom","lobby","bedroom"],
    // Method
    clean : function(){
        alert("Cleaning in Progress...")
    }
}
console.log(housekeeper1.clean());

// ###### Constructor Function ######
// Syntax: image.png
function BellBoy (name,age,workPermit,languages){
    this.name = name;
    this.age = age;
    this.workPermit = workPermit;
    this.languages = languages;
    this.moveSuitcase = function(){
        alert("May I take your Suitcase?")
    }
}

var bellboy1 = new BellBoy("Tom",19,True,["English","Arabic"]); // new object created
console.log(bellboy1.name);
bellboy1.moveSuitcase();

// ###### Callback Function  ######
// A callback function is a function passed into another function as an argument, which 
// is then invoked inside the outer function to complete some kind of routine or action.
document.addEventListener("keypress", respondToKey(evt)); //evt= event

function respondToKey(evt){
    console.log("Key pressed.");
}