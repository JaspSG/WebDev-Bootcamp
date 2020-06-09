var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/55e4d5454b51ab14f1dc84609620367d1c3ed9e04e50744074287bdd9745c3_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/54e8d7464b5bab14f1dc84609620367d1c3ed9e04e50744074287bdd9745c3_340.jpg"},
        {name: "Mountain Goat", image: "https://pixabay.com/get/54e5d4414356a814f1dc84609620367d1c3ed9e04e50744074287bdd9745c3_340.jpg"}
    ]
    res.render("campgrounds", {campgrounds : campgrounds});
});

app.listen(3000, function(){
    console.log("YelpCamp Server Active");
});