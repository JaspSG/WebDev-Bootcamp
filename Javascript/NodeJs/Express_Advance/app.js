var express = require("express");
var app = express();

app.use(express.static("public")); //folder for css files
app.set("view engine", "ejs"); //tells express to expect ejs files, thus not required to write .ejs extension

//request & response
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/fallinlovewith/:thing", function (req, res) {
  var thing = req.params.thing;
  res.render("love", { thingVar: thing }); //passing arguments to ejs file
});

app.get("/posts", function (req, res) {
  var posts = [
    { title: "Post 1", author: "Loren" },
    { title: "Post 2", author: "ipsem" },
    { title: "Garb", author: "age" },
  ];

  res.render("posts", { posts: posts }); //line 5 allows us to write "posts" instead of "posts.ejs"
});

app.get("*", function (req, res) {
  res.send("ERROR, PAGE NOT FOUND LOL.");
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
