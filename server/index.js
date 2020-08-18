//importar exppress
const express = require('express');
const path= require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');

const db= require('./config/database');
require('dotenv').config({path: 'variables.env'})

db.authenticate()
     .then (()=> console.log('DB Conectada'))
     .catch(error => console.log(
          'AQUIIIIIIIIIIIIIII' +
          error));


//configurar express
const app = express();

//habilitar pug

app.set('view engine', 'pug');

//añadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta estatica llamada public
app.use(express.static('public'));

//valida si esta en desrrollo o en produccion
const config = configs[app.get('env')];

//Creamos la variable para el sitio web

app.locals.titulo = config.nombresitio;


//Muestra el año actual

app.use( (req, res, next)=>{
     const fecha = new Date();
     res.locals.fechaActual = fecha.getFullYear();//Pasa un valor usando parametros  atraves de fechaActual
     res.locals.ruta = req.path; //Obtiene la pagina sobre la cual esta ubicada
     return next();

})

//ejecutamos el body parser
app.use(bodyParser.urlencoded({extended: true}));


//cargar rutas
app.use('/', routes());

/*Puesrto y Host para la app*/ 
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '5000';

app.listen(port, host, () =>{
     console.log('El servidor esta funcionando');
});