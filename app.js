"use strict";

const express = require("express");
const app = express();


const port = 3000;
const server = app.listen(port, function() {
    console.log("Server listening!!!");
});


app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use("/special/", function(req, res, next) {
    console.log("You've reached the special area!");
    next();
});

app.get("/", function(req, res, next) {
    console.log(req.method, req.url, res.statusCode);
    res.send("Welcome!");
});

app.get("/news", function(req, res, next) {
    res.send("This is the news!");
});
