const mongoose = require('mongoose');
/*Esto jala la libreria de mongoose*/

/*mongoose.connect(aqui pongo el url que venía abajo en la pagina de mlab que apunta a la base de datos que creamos);
el url que jalamos es mongodb://<dbuser>:<dbpassword>@ds157599.mlab.com:57599/diegotl pero donde dice dbuser debo 
poner mi usuario y donde dice dbpassword debo ponerle mi password, ahi mismo en la pagina me dice que debo poner*/
mongoose.connect('mongodb://ElJugoso:ElJugoso@ds157599.mlab.com:57599/diegotl');

const esquematl = mongoose.esquematl,
       ObjectId = esquematl.ObjectId;
/*Esto es un esquema pero sabe que es esquema*/       

const alumnoEsquematl = new esquematl({
    alumno: ObjectId,
    /*Este es un objeto y abajo pondré sus caracteristicas, con ObjectId lo que hará es crearle un id, cada elemento
    de la base de datos debe tener un Id especifico que no se puede repetir y con este metodo se crea este id para
    mi objeto alumno*/
    name: String, 
    last_name: String, 
    email: String,
    edad: Number,
    city: String
});

var Alumnotl = mongoose.model('Ese Alumno', alumnoEsquematl);
/*Con esto le pongo nombre al objeto alumno que hice arriba creando el modelo para la base de datos, lo que está
entre comillas es el nombre que le pondra al modelo dentro de la base de datps*/
module.exports = Alumnotl;
/*Esto prepara la variable Alumnotl para que pueda ser llamada por otro archivo js*/