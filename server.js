const express = require('express');  //is the module that enable us to create a restful api 
const bodyParser = require('body-parser'); //it allow us to use json back and forth between api and client
const cors = require('cors'); //to allow our restapi to be accessed from anywhere (CROSS ORIGINS)

const app = express();
const port = 40000;

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');//WE ALLOW ALL IP ADDRESSES
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');//WITH THIS WE ALLOW ALL THE HTTP VERBS
    res.header('Access-Control-Allow-Headers','Content-Type');//WITH THIS WE ALLOW THE USE OF THE HEADER CONTENT TYPE
    next();
});

//THE ACTUAL ENDPOINT
app.get('/currentday',function(req,res){
    res.send('1st, october, 2021');
});

app.get('/fullname',function(req,res){
    res.send('Tabita Sarai Fuentes Martinez');
});

app.get('/city',function(req,res){
    res.send('Playas de Rosarito, B. C.');
});

app.get('/school',function(req,res){
    res.send('Universidad de Mexicali');
});

app.post('/sum2numbers',function(req,res){
    let n1 = req.body.n1;
    let n2= req.body.n2;
    let result = n1 + n2

    //create an if sentence 
    res.send(result.toString());


});

app.post('/multiplication3numbers',function(req,res){
    let n1 = req.body.n1;
    
    //create an if sentence 
    res.send(n1)


});

app.post('/areasquare',function(req,res){
    let n1 = req.body.n1;
    
    //create an if sentence 
    res.send(n1)


});

app.post('/areatriangle',function(req,res){
    let n1 = req.body.n1;
    
    //create an if sentence 
    res.send(n1)


});

app.listen(port,function(){
    console.log('MY APP IS RUNNING AT THE PORT ' + port);
})

