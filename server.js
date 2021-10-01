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

//THE ACTUAL ENDPOINT (listo)
app.get('/currentday',function(req,res){
    res.send('1st, october, 2021');

});

//listo
app.get('/fullname',function(req,res){
    res.send('Tabita Sarai Fuentes Martinez');

});

//listo
app.get('/city',function(req,res){
    res.send('Playas de Rosarito, B. C.');
    
});

//listo
app.get('/school',function(req,res){
    res.send('Universidad de Mexicali');

});

//listo
app.post('/sum2numbers',function(req,res){
   let num = req.body.num;
   let num2 = req.body.num2;
   let sum = parseInt(num)+parseInt(num2);

    //create an if sentence (falta)
    res.send (sum.toString());

});

//listo
app.post('/multiplication3numbers',function(req,res){
    let n1 = req.body.n1;
    let n2= req.body.n2;
    let result = n1 * n2;
    
    //create an if sentence 
    res.send(result.toString());

});

//listo
app.post('/areasquare',function(req,res){
    let lado = req.body.lado;
    let lado2 = req.body.lado2;
    let area = lado * lado2;
    
    //create an if sentence 
    res.send(area.toString());

});

//Listo
app.post('/areatriangle',function(req,res){
    var b = req.body.b;
    var h = req.body.h;
    let area = (parseInt(b) * parseInt(h)) / 2;

    //create an if sentence 
    res.send(area.toString());


});

app.listen(port,function(){
    console.log('MY APP IS RUNNING AT THE PORT ' + port);
})

