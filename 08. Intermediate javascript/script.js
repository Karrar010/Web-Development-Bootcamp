var firstLover = prompt("Your Name");
var secondLover = prompt("Their Name");

// Random Number Generator
var num = Math.random();
num = num * 100;
num = Math.floor(num) + 1;
// Condtional Statements and the Control flow of Code
if (num === 100){
    alert("Your both Fire,\nYour Love score is "+num+ "%");    
} else if (60 <= num && num >= 99){
    alert("You are meant for each other,\nYour Love score is "+num+ "%");
}else{
    alert("Your Love score is "+num+ "%");
}
// Comparaters
var a = 1;
var b = "1";
if (a===b){
    console.log("Yes ===");
} else if (a==b){
    console.log("Yes ==");
} else{
    console.log("No")
}
// === equal in value as well as data type
// ==  equal in value
// !== no equal in value
// > < greater and less than
// <= less than or equal to
// >= greater than or equal to

// Combinaing Comparators
// && and
// || or
// !  not

//################ Challenge 1 : BMI in IfElse #################
console.log("----------------- BMI CALCULATOR ---------------");
function yourBMI(weight,height){
    bmi = Math.round(weight / Math.pow(height,2)); // formula for BMI = weight / height*height
    return bmi
}
weight_kgs = prompt("Your weight in Kgs: ")
height_m2 = prompt("Your Height in meters: ")
var bmi = yourBMI(weight_kgs,height_m2);

console.log("Your BMI is "+bmi);
if(bmi > 30){
    console.log("Your Obese");
} else if(bmi >= 25){
    console.log("Your Overweight");
} else if(bmi > 19 && bmi < 25 ){
    console.log("Your Healthy");    
} else{
    console.log("Your Underweight");    
}

// ############ Challenge 2: Leap Year ###########
function leapyear(year){
    if (year%4 === 0 && year%100 !== 0){
        console.log(year+" is a Leap Year");
    } else if (year%4 === 0 && year%100 === 0 && year%400 === 0){
        console.log(year+" is a Leap Year");
    }else{
        console.log(year+" is not a Leap Year");
    }
}
var year = prompt("Enter Year: ");
leapyear(year)

// ------ ARRAYS -------
var guestList = ["Alan","Jane","Don","Yang","Ahmed","Nurul"];
var guestname = prompt("Enter Name: ")

if (guestList.includes(guestname)){
    console.log("Welcome to the Party");
} else{
    console.log("Maybe Next time");
}

// Array Properties:
// Array.push() new element is added at the end of an array
// Array.pop()  element is removed from end of array

// ########### CHALLENGE 3 : FIZZBUZZ ############
var array = [];
var num = 0
function fizzbuzz(array){
    num += 1
    if (num%3 === 0 && num%5===0){
        array.push("FizzBuzz")
    } else if(num%5 === 0){
        array.push("Buzz")
    } else if (num%3 === 0){
        array.push("Fizz")  
    } else{
        array.push(num)        
    }
    console.log(array)
}

// ########## Challenge 4: Who's buying lunch? #########

function whosePaying(listnames){
    var lengthArray = listnames.length;
    var randomElement = Math.floor(Math.random()*lengthArray);
    personPaying = listnames[randomElement];
    return personPaying+" is paying for lunch today."
}
listnames = ["Alex","Tony","Rex","Jane","Banner"]
whosePaying(listnames)


// ---------------------  CONTROL LOOPS -----------------------

// ------------- WHILE LOOP -------------
// Syntax:
    // while(something) {
        // some code
    // }

// ####### FIZZBUZZ WITH WHILE LOOP #######
var array = [];
var num = 1
function fizzbuzz(){
    while (num <= 100){
        if (num%3 === 0 && num%5===0){
            array.push("FizzBuzz");
        } else if(num%5 === 0){
            array.push("Buzz");
        } else if (num%3 === 0){
            array.push("Fizz"); 
        } else{
            array.push(num);        
        }
        num += 1;
    }
    console.log(array)
}
fizzbuzz();


// ####### Challenge : 99 bottles of beer song #######
function bottlesOfBeerSong(){
    num =  100;
    while(num>=0){
        num = num - 1;
        if(num === 0){
            return "No more bottle of beer on the wall, No more bottles of beer.\nGo to the store and buy more, "+ (num-99) +" bottles of beer on th wall."
        }
        console.log(num + " bottle of beer on the wall, "+num+" bottles of beer.\nTake one down pass it around, "+ (num-1) +" bottles of beer on th wall.")
    }
}
bottlesOfBeerSong()

// --------- FOR LOOP --------
// Syntax:
//     for (var i=0 ; i<10 ; i++){
//          console.log(i);
//     }

// ###### FIZZBUZZ FOR LOOP ######
var array = [];
function fizzbuzz(){
    for(var num = 1;num <= 100; num++){
        if (num%3 === 0 && num%5===0){
            array.push("FizzBuzz");
        } else if(num%5 === 0){
            array.push("Buzz");
        } else if (num%3 === 0){
            array.push("Fizz"); 
        } else{
            array.push(num);        
        }
    }
    console.log(array)
}
fizzbuzz();

// ######## Challenge : Fibonacci Sequence #########
function fibonacciSequence(tillNum){
    var fibonacciArray = []
    var sumTwoNumber = 0
    for(var i = 0; i<tillNum; i++){
        if(i>1){
            sumTwoNumber = fibonacciArray[i-2] + fibonacciArray[i-1]
            fibonacciArray.push(sumTwoNumber);
        } else{
            fibonacciArray.push(i);
        }
    } 
    console.log(fibonacciArray)
}
var tillNum = prompt("Enter Number: ")
fibonacciSequence(tillNum)