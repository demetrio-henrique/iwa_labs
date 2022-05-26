const http = require("http"),
      logger = require("morgan"),
      express = require("express"),
      bodyParser = require ("body-parser"),
      mongoose = require ("mongoose");

let app = express();
let port = 8000;

app.use(bodyParser.json()); //it should be at first

app.use(require('./router'));

app.use(logger("tiny")); 

//modifying
//mongoose.connect('mongodb://localhost/test'); //connecting via localhost with a database called test.
const dbURI = "mongodb://localhost/test";


mongoose.connect (dbURI, {useNewUrlParser:true,
useUnifiedTopology: true})
.then((result)=> console.log('connected to db'))
.catch((err) => console.log(err));

app.listen(port, function(err){
    console.log("Listening on port: " +port)
});
    
