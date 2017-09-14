var express = require("express");

const app = new express();



app.get("/teste", function(req, res){
    res.send(200,process.env.variavel);
});

var method = function(v1){
    return v1+1;
}

exports.method = method;

app.listen(9001);
