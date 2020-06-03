var express = require("express");
var app = express();

//request & response
app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function (req, res) {
  var thing = req.params.thing;
  res.render("love.ejs", { thingVar: thing }); //passing arguments to ejs file
});

app.get("/posts", function (req, res) {
  var posts = [
    { title: "Post 1", author: "Loren" },
    { title: "Post 2", author: "ipsem" },
    { title: "Garb", author: "age" },
  ];

  res.render("posts.ejs", { posts: posts });
});

app.get("*", function (req, res) {
  res.send("ERROR, PAGE NOT FOUND LOL.");
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
