var express = require("express");
var app = express();
var bodyParser = require("body-parser"); //parse input from forms and change into JS object

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', "ejs");

var friends = ['James', 'Sam', 'Sarah'];

app.get("/", function (req, res) {
    res.render("home");
})

//post for sending information
app.post("/addfriend", function (req, res) {
    var new_friend = req.body.newfriend //from friends.ejs name, in forms
    friends.push(new_friend);
    console.log(req.body);
    res.redirect("/friends"); //redirect runs all code from friends route
})

app.get("/friends", function (req, res) {
    res.render("friends", { friends: friends }); //template, name:data
});

//routes occur on first instance, therefore order matters. Thus this should be last.
app.get("/*", function (req, res) {
    res.send("Page Does not exist!");
});

//Tell Express to listen for requests (start_server)
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});