const express = require("express"),
      router = express.Router(),
      itemController = require("./item-controller"); //importing the item controller class.
      userController = require("./user-controller");


      
      router.get("/:foo/:bar", itemController.helloWorld); //accessing the router handling functions to show the function from itemcontroller class.
      router.post('/users', userController.createUser);
      router.get ('/users', userController.getUsers);
      router.get ('/users/:id', userController.getUser); // : semicolon pois eh um parametro onde o usuario ira isnerir o id desejado pra ser mostrado
      router.delete ('/users/:id', userController.deleteUser);
      
      module.exports = router;