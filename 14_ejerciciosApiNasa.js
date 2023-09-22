/*1.-Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana
pasada hasta hoy*/

const pedinche = require('request');
/*Aquí mandamos a llamar a nuestra api, para ello debe estar en la misma carpeta donde pusimos
nuestro npm que si es un archivo visible en nuestra carpeta*/
pedinche.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-13&end_date=2018-04-20&api_key=Udt0OyeQCGDPV2Z1QV3Vv0iVvE3GWz8z5K3ecGIg",
/*Aquí usamos el url para acceder a la api con nuestra llave*/            
            (metidaDePata, Rifada, cuerpesitoSepsi)=>{
            var Recibida = JSON.parse(cuerpesitoSepsi);
            /*Aquí convertimos nuestro parametro cuerpecito en un json para que podamos trabajar
            con el como si fuera un objeto*/
// var AsteroidesAhh0 = Recibida.near_earth_objects['2018-04-18'].map((valoresArray, indicesArray, imprimirArray)=>{
// /*Aquí nos metemos especificamente a una parte de nuestro json, los json solo pueden llegar a 
// las partes de la api donde en nuestro JSON Editor Online podemos verlos con las llaves de []
// no a los que tienen llaves de {}*/
// /*La forma que tenemos de meternos dentro de algun array o lista que tiene como nombre un 
// numero es como vemos arriba poniendo las llaves [] y entre comillas poner el numero*/
// return valoresArray;
// })

// var AsteroidesAhh = AsteroidesAhh0.filter((valoresFiltrados, indicesArray, imprimirArray)=>{
// return valoresFiltrados.is_potentially_hazardous_asteroid == true;
// });
// console.log("---------- Del dia 18 de abril del 2018----------");
// console.log(AsteroidesAhh);

// var AsteroidesAhh01 = Recibida.near_earth_objects['2018-04-19'].map((x1,y1,z1)=>{
// return x1; 
// });

// var AsteroidesAhh1 = AsteroidesAhh01.filter((xf1,yf1,zf1)=>{
// return xf1.is_potentially_hazardous_asteroid == true;
// });

// console.log("---------- Del dia 19 de abril del 2018----------")
// console.log(AsteroidesAhh1);
/*Así se haria uno por uno pero como quiero hacer que esto pueda aplicar para todo el array
hay una manera mejor de hacerlo y es con un for que llegue hasta el tamaño de 
near_earth_objects*/

for (let i = 13; i < 21; i++) {
    var AsteroidesAhh_El_Bueno = Recibida.near_earth_objects['2018-04-' + i].filter((X,Y,Z)=>{
        return X.is_potentially_hazardous_asteroid == true;
    })
};

});

