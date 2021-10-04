const express = require('express');  
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

const app = express();
const port = 40000;

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});


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
   let num = req.body.num;
   let num2 = req.body.num2;
   let sum = parseInt(num)+parseInt(num2);

    
    res.send (sum.toString());

});


app.post('/multiplication3numbers',function(req,res){
    let n1 = req.body.n1;
    let n2= req.body.n2;
    let n3= req.body.n3;
    let result = n1 * n2 * n3;
    
    
    res.send(result.toString());

});


app.post('/areasquare',function(req,res){
    let lado = req.body.lado;
    let lado2 = req.body.lado2;
    let area = lado * lado2;
    
    
    res.send(area.toString());

});


app.post('/areatriangle',function(req,res){
    var b = req.body.b;
    var h = req.body.h;
    let area = (parseInt(b) * parseInt(h)) / 2;

    
    res.send(area.toString());


});

app.listen(port,function(){
    console.log('MY APP IS RUNNING AT THE PORT ' + port);
})

