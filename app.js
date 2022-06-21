const express = require('express');

const app = express();

path = require('path');

app.set('puerto',process.env.PORT || 3000)

app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

app.use(express.static('public'));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'/views/home.html'))
})

app.get("/register",function(req,res){
    res.sendFile(path.join(__dirname,'/views/register.html'))
})

app.get("/login",function(req,res){
    res.sendFile(path.join(__dirname,'/views/login.html'))
})