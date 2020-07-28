var express = require("express");
var app = express();

console.log("Hola desde el programa 1");
fecha = new Date();
console.log("El tiempo actual es: " + fecha.toISOString());

// create an express route for the home page
app.get("/", function (req, res) {
  console.log("Request arrived");
  res.sendFile(__dirname + "/pages/index.html");
});
// start the server on port 4000
app.listen(4000);
console.log("Server has started!");
