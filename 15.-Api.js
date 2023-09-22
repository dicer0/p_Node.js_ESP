const express = require('express');
const app = express();
/*Con esto jalamos nuestra biblioteca express y la guardamos en app*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*Con estas 3 lineas lo que estoy haciendo es permitir que tenga acceso al 
body desde mi codigo*/

// app.get(aqui pongo la ruta en donde se va a ejecutar, 
// aqui le pongo un callback que lleve dos parametros el request y el response);
app.get('/', (request , response)=>{
    response.send({mensaje: 'Esta es mi 1era API'});
})
/*request es todo lo que viene del cliente como por ejemplo el puerto que usó, 
las variables que yo cree en la ruta con /: , las querys, */
/*response es todo lo que yo voy a contestarle al cliente*/
/*la ruta que le puse de / es la mas generica que existe*/
/*Adentro de el response.send puedo meter lo que yo quiera y en este caso metí
un JSON*/

app.get('/saludo', (req, res)=>{
    /*A las rutas también se les llama endpoints*/
    res.send({mensaje: 'Quiubolas'});
});
/*Si hay alguna bronca siempre es bueno usar mi browser en modo incignito 
porque no hay caché*/

app.get('/user/:i_d', (req, res)=>{
    console.log(req.params);
    /*El params lo que hace es buscar el valor de la variable que le di en 
    mi url al buscar en la ruta este get*/
    const i_d = req.params.i_d;
    /*Con esta linea lo que hare es obtener el valor de la variable i_d que 
    puse en la ruta*/
    res.send({id:i_d});
});
/*donde puse la ruta cuando yo pongo /: despues de esa cosa pondre el nombre
de mi variable*/

app.get('/busqueda', (req, res)=>{
    console.log(req);
    console.log(req.query);
    const {q, color} = req.query;
    /*Esto es como lo deberé poner en mi url para guardar valores en mi Json
    de abajo*/
    res.send({busqueda: q, coloration: color});
});
/*Un query es una forma de crear una variable en la url sin necesidad de 
meterte a ninguna ruta, esto se hace luego para los buscadores*/

app.post('/create/user', (req, res)=>{
    /*Todo lo que no sea get se tiene que hacer a través de postman ahuevo*/
    const {name, last_name} = req.body;
    /*Para hacer esto debo tener ya las 3 lineas para poder ver y usar el body*/
    /*Aqui se esta haciendo igual que en el query no hay que confundirse*/
    console.log(res.body);
    res.status(201).send({id:1, name, last_name});
    /*Aqui con el .status(210) lo que estoy haciendo es que le regrese como 
    status un estado en especifico que en este casi será el 201*/
});
/*Mientras los metodos sean diferentes las rutas se pueden llamar iguales*/

app.post('/create/suma', (req, res)=>{
    const {num1, num2} = req.body;
    res.send({sum1: num1 + num2});
});
/*Codigo para poder mandar un post a través de postman*/

// app.listen(aqui pongo en que puerto va a correr, aqui pongo un callback)
app.listen(3000, ()=>{
    console.log('Server corriendo en el puerto 3000');
});
/*Esta linea de codigo debe ir hasta abajo*/
/*Usualmente los puertos que usaremos son 3000 8080 5000 8000*/
/*Con estas simples lineas de codigo ya levantamos un servidor en nuestra compu*/
/*Para matar nuestro servidor le debemos dar CTRL+C que significa stop, si le 
damos CTRL+Z lo que haremos será matar mi servidor*/