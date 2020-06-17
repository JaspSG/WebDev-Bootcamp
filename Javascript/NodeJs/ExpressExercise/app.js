var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function (req, res) {
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof",
    goldfish: "...",
  };

  var animal = req.params.animal.toLocaleLowerCase();
  var sound = sounds[animal];
  res.send(`The ${animal} says ${sound}`);
});

app.get("/repeat/:message/:num/", function (req, res) {
  var num = Number(req.params.num);
  var msg = req.params.message;
  var result = "";
  for (var i = 0; i < num; i++) {
    result += msg + " ";
  }
  res.send(result);
});

app.get("/*", function (req, res) {
  res.send("Something went wrong, check your code!");
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
