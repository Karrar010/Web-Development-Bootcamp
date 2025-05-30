import express from "express";

const app = express();

//main route
app.get("/", (req, res) => {  //locolhost:3000
    // res.send("Hello World");        // Only one res.send() can be used per request — the second one is ignored, and may even trigger an error in some setups.
    res.send("<h1> Hello World </h1>");
});

//different routes
app.get("/contacts", (req, res) => {  //locolhost:3000/contacts
    res.send("Contact me at: 12345@gmail.com");
});

app.get("/about", (req, res) => {  //locolhost:3000/about
    res.send("I am a coder, who loves to eat and code.");
});

app.get("/bye", (req, res) => {  //locolhost:3000/about
    res.send("Thanks for being here");
});

//start server
app.listen(3000, () => {
    console.log("Server is running on port 3000"); //callback
});

// install nodemon (npm install -g nodemon) it saves time by dynamically updating and running the server
// for that instead of "node server.js" run "nodemon server.js"