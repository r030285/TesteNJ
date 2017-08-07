var express = require("express");

const app = new express();



app.get("/teste", function(req, res){
    res.send(200,process.env.variavel);
});


app.listen(80);
