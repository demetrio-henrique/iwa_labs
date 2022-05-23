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

mongoose.connect('mongodb://localhost/test'); //connecting via localhost with a database called test.

mongoose.connection.on('error', (err) => {
console.log('Mongodb Error: ', err);
process.exit();

});
mongoose.connection.on('connected', () =>{
  console.log('Mongodb is successfully connected');

});

app.listen(port, function(err){
    console.log("Listening on port: " +port)
});
    
