const express = require("express"),
      router = express.Router(),
      itemController = require("./item-controller"); //importing the item controller class.


      
      router.get("/:foo/:bar", itemController.helloWorld); //accessing the router handling functions to show the function from itemcontroller class.
        
      module.exports = router;