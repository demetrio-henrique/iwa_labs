exports.helloWorld = function(req, res){ //req and res come from exprss module installed
    
    res.json({message: "Hello World!",  //express js 
    data:[req.param.foo]});
    req.params.foo,
    req.params.bar
}