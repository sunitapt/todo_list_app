var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');    // configure app to use bodyParser() this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/views'));
app.use(express.static(__dirname+ '/public'));

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
var todoRoutes = require('./routes/todos');

app.use('/api/todos',todoRoutes);
app.get('/',function(req,res){
    res.sendFile("index.html");
});

app.listen(port,function(){
    console.log("APP IS RUNNING ON PORT "+ port);
});