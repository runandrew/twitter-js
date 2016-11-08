"use strict";

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require("body-parser")
// create application/json parser
let jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );

});

router.get("/users/:name", function(req, res, next) {
    let name = req.params.name;
    // let list = tweetBank.find(function(tweet) {
    //     return tweet.name === name;
    // });
    let list = tweetBank.find( {name: name} );
    res.render("index", { tweets: list, showForm: true, userPage: true });
});

router.post("/tweets", urlencodedParser, function(req, res, next) {
    const name = req.body.name;
    const text = req.body.text;
    tweetBank.add(name, text);
    res.redirect("/")
});

// router.get('/', function (req, res) {
//   res.sendFile( '../public/stylesheets/style.css');
// });

module.exports = router;
