const express = require('express'); // Trae libreria a la constante

const app=express();//ejecutar funcion

const port=3001; //configurando puerto , en el navegador debemos escribir localhost:3001

app.get('/api',(req,res) => {
    console.log("paso por get")
    res.json({mensaje:"hola mundo"}).status(200);
}); //primer parametro es para escribir en el navegador : http://localhost:3001/api, 
//el segundo sirve para decir que va pasar con el primer parametro el cual es api y cuando se le haga get responde la funcion que hay por segundo parametro

app.listen(port,() =>{
    console.log("estoy escuhando en el puerto:"+port);
})//app.LISTEN pone a escuchar al servidor en el puerto 3001


