var express = require("express");
var app = express();

// "/" => 'Hi there!'
app.get("/", function (req, res) {
  res.send("Hi There!");
});

// "/bye" => 'Goodbye!'
app.get("/bye", function (req, res) {
  res.send("Bye!");
});

// "dog" => "meow!"
app.get("/dog", function (req, res) {
  res.send("Meow!");
});

// looks for a pattern of /r/
app.get("/r/:subredditName", function (req, res) {
  res.send("Welcome to a subreddit");
});

app.get("/r/:subredditName/comments/:id/:title/", function (req, res) {
  var subreddit = req.params.subredditName;
  res.send(`Welcome to the ${subreddit.toLocaleUpperCase()} subreddit!`);
});

//routes occur on first instance, therefore order matters. Thus this should be last.
app.get("/*", function (req, res) {
  res.send("Page Does not exist!");
});

//Tell Express to listen for requests (start_server)
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
