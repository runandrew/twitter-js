"use strict";
//Rachel was here
//Andrew was here
const express = require("express");
const app = express();
const nunjucks = require("nunjucks");


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

// let locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

app.get("/renderTemplate", function(req, res, next) {
    let people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
});

nunjucks.configure("views", { noCache: true});
app.set("view engine", "html");
app.engine("html", nunjucks.render);
