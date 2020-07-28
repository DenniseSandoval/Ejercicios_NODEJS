var express = require("express");
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//index page
app.get("/", function (req, res) {
  var drinks = [
    { name: "Bloody Mary", drunkness: 3 },
    { name: "Martini", drunkness: 5 },
    { name: "Scotch", drunkness: 10 },
  ];
  var tagline = "Plantillas con NODEJS";
  res.render("pages/index", {
    drinks: drinks,
    tagline: tagline,
  });
});

//about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(4000);
console.log("Server has started!");
