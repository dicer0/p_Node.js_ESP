const request = require('request');
/*Aquí lo que estoy haciendo es llamar a una biblioteca llamada request, para
ello este archivo debe estar en la misma carpeta donde pusimos nuestro npm, que
si es un archivo visible en nuestro explorador de archivos y lo que me
permitirá hacer esta biblioteca es usar unos metodos que sirven para poderme
conectar a cualquier servidor que se deje, así me simplificándome la vida ya que
para hacer esto de formas convencionales me deberia conectar con códigos de muy
bajo nivel, casi casi con lineas de lenguaje ensamblador*/

//request.get(a qué url voy a apuntar, cómo lo voy a devolver);
request.get("http://pokeapi.co/api/v2/pokemon/151",
           (error,response,body)=>{
            /*En sí el metodo get tiene un orden en el que me va a pasar los datos de la
            cosa que le esté pidiendo
            -En el 1er lugar me va a pasar el error.
            -En el 2do lugar me va a pasar el response que es todo el desmadre que tuvo
            que hacer con el servidor para conseguir lo que le pedí y todos los estados
            de los diferentes parametros igual del servidor.
            -En el 3er lugar me pasará el body que es el archivo html o json o javascritp
            o lo que sea de la cosa que le esté pidiendo en mi get.
            -Si le paso de un 4to parametro en adelante me pintara en consola undefined
            ya que solo hasta 3 cosas me puede regresar el get*/
                console.log("Aqui vamos a usar un Callback")

                console.log(error)

                console.log(response.statusCode)
                //con el response.statusCode obtendremos los estados que podremos ver qué
                //significan en la pagina de http cats https://http.cat/

                //console.log(body)
                /*Esto lo que me va a devolver es el archivo html que me puede servir para
                correr ese programa que estoy pidiendo*/
                let respuesta = JSON.parse(body)
                /*let se usa para tener restringida la variable dentro de mi funcion y
                que otras funciones no puedan acceder a ella a diferencia de var que
                es una variable global a la que pueden acceder sin problema las demás
                funciones*/
                console.log(typeof(respuesta));
                console.log(respuesta);
                /*no se puede poner directo por eso lo creamos en un json con el metodo
                json.parse y este hará que loa variable respuesta sea de tipo objeto*/
                for (var i = 0; i < respuesta.stats.length; i++) {
                    console.log("---------------");
                    console.log(respuesta.stats[i].stat.name);
                    /*Aquí puse lo de stats, stat, name, etc. lo usé porque asi se llaman
                    los distintos datos de mi json el cual lo puedo visualizar en la
                    pagina de JSON Editor Online en el url https://jsoneditoronline.org
                    */
                   console.log("---------------");
                }
           })
/*Aqui simplemente estoy usando una funcion callback para usar el metodo get de mi request
con parametros llamados error que siempre va 1ero, response y body*/

//Ahora haremos lo mismo pero con una promesa
function peticionPromesa(){
    return new Promise((resolve,reject) => {
        //request.get(a qué url voy a apuntar, cómo lo voy a devolver);
        request.get("http://pokeapi.co/api/v2/pokemon/151",
        (err, response, body) =>{
            console.log("Aquí vamos a usar un Promise");
            /*Aquí usamos el status code 200 para que continúe mi if porque el 200 significa
            que todo funcionó bien*/
            if (response.statusCode == 200) {
                let json = JSON.parse(body);
                /*El body siempre llega de tipo string*/
                resolve(json);
                /*esto lo que hace es regresarle a mi parametro resolve lo que yo quiera, que
                en este caso es la variable restringida llamada json y esos 2 parametros son
                los que podre usar despues con then*/
            }else{
                reject("Tuvimos un error!!");
                /*esto lo que hace es regresarle al parametro reject de mi función
                peticionPromesa() lo que yo quiera, que en este caso es la variable restringida
                llamada json y esos 2 parametros son los que podre usar despues con then*/
            }
        });
    });
}

peticionPromesa()
/*Aqui ya uso lo que haya recibido de mis ifs o else que se guardó en mis parametros response o
reject*/
    .then(response =>{
        for (var i = 0; i < response.stats.length; i++) {
            console.log("---------------");
            console.log(response.stats[i].stat.name);
            console.log("---------------");
        }
        console.log(response);
    })
    /*Así hago la misma funión que hicimos con el callback anterior, pero con promises lo del
    for se pone dentro de los parametros del then*/
    .catch(err => console.log(err));
