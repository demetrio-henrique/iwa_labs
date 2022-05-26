const User = require("./models/user"); //importing the library  .model . user inserted in the router folder
//the routes js file has methods/funcionts that are invoking the following.

exports.createUser = function (req,res){
    let newuser = new User(req.body);
    newuser.save(function(err,user){
        if(err){
            res.status(400).json(err); //if it fail, then we show the error
        }
        res.json(user); // if everything is fina, it create a new user.
    });
    };
    exports.getUsers = function(req,res){
        User.find({}, function(err,users){ //im not sure if User is defined properly
            if (err){
                res.status(400).json(err);
            }
            res.json(users);
    });
    };
