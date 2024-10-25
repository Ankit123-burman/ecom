const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


/* 
app.get("/",(req,res)=>{
    res.send("Hello World");
}); */
app.use(bodyParser.urlencoded({extends:false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname +'/index.html'))
})

app.post('/api/v1/login',(req,res)=>{
   
    res.send(`<h1>DONE ${req.body.name} </h1>`)
    console.log(req.body);
  
})

app.listen(3500,()=>{
    console.log("server is running");
})
