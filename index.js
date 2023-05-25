require('dotenv').config();
const express = require('express');
const cors = require('cors')

const dbConection = require ('./databse/config');

//Crear el servidor de express
const app = express();
//consigurar cors
app.use( cors() )

//Base de datos
dbConection();

//Rutas
app.get('/', (req, res) =>{

    res.json({
        ok: true,
        msg: 'Hola mundo'
    });S
});

app.listen(process.env.PORT, ()=>{
    console.log('Servidor en funcionamiento en puerto '+ 3000);
});