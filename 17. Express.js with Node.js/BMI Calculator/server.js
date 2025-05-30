const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // bodyParser parses post request in diff formats

app.get('/', function(req,res) {
    console.log(__dirname)
    res.sendFile(__dirname+"/bmiCalculator.html"); })

app.post('/', function(req,res){ 
    console.log(req.body)

    var weight = Number(req.body.W);
    var height = Number(req.body.H);
    var n = weight/(height*height);
    
    res.send("Your BMI is "+ n);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})