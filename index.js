var express = require("express");

const app = new express();



app.get("/teste", function(req, res){
    res.send(200,"OK");
});


app.listen(8181);
