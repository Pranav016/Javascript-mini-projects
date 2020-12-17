// commands to reproduce-
// npm init
// npm install express
// npm install -g nodemon - one time installation
// nodemon calculator.js
// npm install body-parser

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html") // __dirname helps reach the file wherever it is on the system
});

app.post("/",function(req,res){
    var num1 = Number(req.body.num1); //elements are recieved as text that is why we have to explicitly convert them
    var num2 = Number(req.body.num2);
    var result= num1+num2;
    res.send("The result of the calculation is " + result);
});

app.listen("3000",function(){
    console.log("Started on port 3000 with nodemon");
});