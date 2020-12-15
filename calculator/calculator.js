const express = require("express");

const app = express()

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html") // __dirname helps reach the file wherever it is on the system
});

app.listen("3000",function(){
    console.log("Started on port 3000 with nodemon");
});