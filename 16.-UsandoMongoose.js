/*El archivo javascript no se puede llamar mongoose.js porque javascript se confunde
debe tener otro nombre tampoco la carpeta es recomendable que se llame mongoose*/
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const Alumno = require('./mongooseClient');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/v1/user/create', (req,res)=>{
    const {name, last_nametl, agetl} = req.body;
    let newAlumno = Alumnotl({
        nametl: nametl,
        last_name: last_nametl,
        age: agetl
        /*Si tuvieran el mismo nombre lo que puse arriba y las variables del json
        del otro archivo simplemente se pondria con
        
        name,
        last_name,
        age
        
        */
    });
    /*Con esto estamos creando los valores de name, last_name y age de nuestro json
    creado en nuestro archivo mongooseClient.js*/
    /*Debemos poner la variable a la que le hicimos mongoose.model en el otro archivo
    y ponerle como parametro el json ya creado*/

    /*newAlumno.save((error si es que hubo alguno, si es que si salvó que es lo que me trajo)=>{
        aqui va el if y else 
    })*/
    newAlumno.save((err, alumno)=>{
        if(err) throw err;
        /*investigar esta madre pero en si lo que hace es que si regresa ese parámetro me regrese
        ese mismo parametro*/

        res.send(alumno);
    })
});
/*Aquí estamos creando un post normal como lo hicimos en api.js*/

//todos los usuarios
app.get('/api/v1/user', (req, res)=>{
    Alumno.find().exec().then(alumnos => {
        res.send(alumnos);
    }).catch((err)=>{
        res.status(400).send(err);
    })
});

//traer un usuario por su id 
app.get('/api/v1/user/:uid', (req, res)=>{
    const {uid} = req.params
    Alumno.findById(uid).exec().then(alumno =>{
        res.send(alumno);
    }).catch(err =>{
        res.status(404).send(err);
    })
});

// app.listen(aqui pongo en que puerto va a correr, aqui pongo un callback)
app.listen(3000, ()=>{
    console.log('server on 3000');
});
/*Con estas simples lineas de codigo ya levantamos un servidor en nuestra compu*/
