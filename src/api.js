const express = require('express');
const serverless= require('serverless-http');
const app= express();

const cors= require("cors");




const router = express.Router();


app.use(cors());


const data = require("./data"); // import the data constant from data.js




router.get('/', function(req, res){
   const randomIndex = Math.floor(Math.random() * data.length); // generate a random index
    const randomObject = data[randomIndex]; // get the random object from the array
    res.send(randomObject);

});


console.log("success");


app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);

