const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    console.log(firstName, lastName, email);
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const options = {
        url: "https://usX.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members",
        method: "POST",
        headers: {
            "Authorization": "YOUR_API_KEY"
        },
        body: jsonData
    };

    request(options, (error, response, body) => {
        if (error) {
            res.sendFile(__dirname + "/failure.html");
        } else if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }


    });
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})