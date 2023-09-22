const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';
/*Aquí lo que hago es poner la url hasta el punto en donde se parecen todas, en el caso
de la url de goodreads se parecen siempre hasta v1, siempre debe quedar un slash al 
final de todos los urls*/

const URI = 'authors/';

var URL = URL_BASE+URI;

var jsonSend = {
    "name": "Pedrito",
    "last_name": "Perez Perez",
    "nacionalidad": "MX",
    "biography": "Esta es una biografia de prueba del batch 19 cita roja",
    "gender": "M",
    "age": 24,
    "is_alive": true
}

request.post({url: URL, form: jsonSend},(err, status, body) => {
    /*aqui el err, status y body son igual a lo que significaban en el callback, osea
    que son el error, el response y el body*/
    console.log(status.statusCode);
    console.log(body);
    /*El body siempre me lo va a regresar como String por lo tanto para poder 
    convertirlo en objeto para acceder a su parametro id debo usar JSON.parse()*/
    let json = JSON.parse(body);
    console.log(json.id);
});
/*request.post(url a donde lo estoy mandando, lo que le voy a enviar (cada libreria tiene
 su forma de mandarle datos, en este caso los Jsons se mandan con la palabra reservada 
 form pero para mandarlas a diferentes librerias se pueden mandar con diferente palabra
 reservada))*/
 /*Todas las liberias tienen sus documentaciones asi como la que estamos usando de 
 Goodreads y estas deben estar ahuevo documentadas en internet diciendote como debes 
 usarlas.*/
 /*Con esto lo que estamos haciendo es que nos regrese una id para nuestro post, en este
 json no debe ir ya una id*/

 function ObtenerId(){
     return new Promise((resolve, reject) => {
         request.put({url: URL, form: jsonSend}, (err, status, body) =>{
            if(status.statusCode == 200){
            let body = JSON.parse(body);
            resolve(body);
            }else{
                reject(`El estatus fue: ${status.statusCode}`);
            }
         })
     })
 }

 ObtenerId()
            .then(body => {
                console.log("------------------------------------");
                console.log(`El id de nuestro post es: ${body.id}`);
            })
            .catch(err => {
                console.log("------------------------------------");
                console.log(err);
            });