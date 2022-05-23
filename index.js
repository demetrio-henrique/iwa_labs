const http = require("http"),
      logger = require("morgan"),
      express = require("express"),
      bodyParser = require ("body-parser"),
      mongoose = require ("mongoose");

let app = express();
let port = 8000;

app.use(require('./router'));
app.use(bodyParser.json());
app.use(logger("tiny"));

app.listen(port, function(err){
console.log("Listening on port: " +port)

});
    
