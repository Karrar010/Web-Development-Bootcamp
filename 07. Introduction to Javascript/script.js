function lifeInDays(age){
    var ageRemaining = 90 - age;
    var days = ageRemaining*365;
    var weeks = ageRemaining*52;
    var months = ageRemaining*12;
    console.log("You have "+days+" days, "+weeks+" weeks, "+months+" months remaning.");
}
lifeInDays(19);

// Challenge: BMI Calculator
console.log("----------------- BMI CALCULATOR ---------------");
function yourBMI(weight,height){
    bmi = Math.round(weight / Math.pow(height,2)); // formula for BMI = weight / height*height
    console.log("Your BMI is "+ bmi);
    message = "Stay Healthy"
    return message
}
weight_kgs = prompt("Your weight in Kgs: ")
height_m2 = prompt("Your Height in meters: ")
console.log(yourBMI(weight_kgs,height_m2));