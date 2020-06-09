var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs"); //let render know to read as ejs file

app.get("/", function(req,res){
    res.render("search");
});

app.get("/results", function (req, res) {
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"; //construct url for API
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) { //response 200 usually means all good
            var data = JSON.parse(body); //convert json file to javascrip object
            
            res.render("results", { data: data }); //pass data to ejs file.
        }
    });
});


app.listen(3000, function () {
    console.log("Server Started");
});