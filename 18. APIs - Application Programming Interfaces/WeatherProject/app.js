const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.get('/', (req, res) => {
    console.log("Working...")
    res.send("<h1>Weather App</h1>")
    res.sendFile(__dirname + "/index.html"); // serves the index.html file when the root URL is accessed
});

app.post('/', (req, res) => {
    console.log("Post Recieved")
    console.log(req.body.cityName);    

    const location =req.body.cityName;
    const apiKey = "abcd1234"
    const url = "https://api.openweathermap.org/data/4.5/weather?q="+location+"&"+apiKey+"&units=metric"; // API URL to get the weather data for a specific location
    https.get(url,(response)=> {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            // console.log(temp);
            // since we can only have one res.send()
            res.write("<h1>Weather App</h1>");
            res.write(" Weather Condition"+ weatherData.weather[0].icon) 
            res.write("<img src='http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png'>"); // displays the image of the weather (clouds or sun)

            res.send("<h1>Temperature in "+ location+" is "+ temp+ " degrees Celsius</h1>"); // renders the API Data on the website
        });
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
