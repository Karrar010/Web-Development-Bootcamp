const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // bodyParser parses post request in diff formats

app.get('/', function(req,res) {
    console.log(__dirname)
    res.sendFile(__dirname+"/index.html");  //constant "__dirname" gives file path of current directory .\17. Express.js with Node.js\Calculator
})

app.post('/', function(req,res){  // handles any post requests that come to the home/main route
    // when calcalate is clicked this is triggered and body-parser is installed as it helps pass the information sent through post request
    console.log(req.body)
    // console.log(req.body.num1) 
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    
    res.send("Result (Addition): "+ result);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})