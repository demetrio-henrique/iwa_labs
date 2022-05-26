const User = require("./models/user"); //importing the library  .model . user inserted in the router folder
//the routes js file has methods/funcionts that are invoking the following.

exports.createUser = function (req,res){
    let newuser = new User(req.body);
    newuser.save(function(err,user){
        if(err){
            res.status(400).json(err); //if it fail, then we show the error
        }
        res.json(user); // if everything is fine, it create a new user.
    });
    };
    exports.getUsers = function(req,res){
        User.find({}, function(err,users){ //Its is going to find all the users recorded in mongodb
            if (err){
                res.status(400).json(err);
            }
            res.json(users);
    });
    };

    exports.getUser = function(req,res){
        User.find({}, function(err,users){ //Its is going to find all the users recorded in mongodb
            if (err){
                res.status(400).json(err);
            }
            res.json(users);
    });
    };


    exports.deleteUser = function(req,res){
        User.findByIdAndRemove(req.params.id, function (err, user){ //Its is going to dele the users by id in mongodb database collection
            if (err){
                res.status(400).json(err);
            }
            res.json(users);
    });
    };
