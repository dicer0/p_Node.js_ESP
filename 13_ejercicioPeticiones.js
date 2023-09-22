/*1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.*/
const pedido = require('request');
/*Aquí mandamos a llamar a nuestra api, para ello debe estar en la misma carpeta donde pusimos
nuestro npm que si es un archivo visible en nuestra carpeta*/
pedido.get("http://pokeapi.co/api/v2/pokemon/200", 
            (cagada, rifada, cuerpesito) => {
            let ObjetoJSON = JSON.parse(cuerpesito);
            console.log(`el error fue: ${cagada}`);
            console.log(`el estado de mi peticion es: ${rifada.statusCode} el cual se puede ver que significa en http cats`);
            for (let i = 0; i < ObjetoJSON.types.length; i++) {
                console.log("---------------");
                console.log(`el tipo del pokemon al que le hice la peticion es: ${ObjetoJSON.types[i].type.name}`);
                console.log("---------------");
            }
})

/*2.- Hacer una funcion que haga una peticion del libro i robot que obtenemos en el url: 
http://openlibrary.org/search.json?q=i+robot), buscar el libro y traer el o los autores*/
function esaLaPromesa(){
    return new Promise((jalotl, noJalotl) => {
        request.get("http://openlibrary.org/search.json?q=i+robot",
        (lapsusBrutus, soyDonVergas, contenidotl)=>{
            if (soyDonVergas.statusCode == 200) {
                let elJeison =JSON.parse(contenidotl);
                jalotl(elJeison);
            }else{
                noJalotl("la cagamos o la cagaste tu!!");
            }
        });
    });
}

esaLaPromesa()
        .then(soyDonVergas => {
            for (let i = 0; i < elJeison.docs.length; index++) {
                console.log("--------------------");
                console.log(elJeison.docs[i].author_name);
                console.log("--------------------");
            }
            console.log(elJeison);
        }).catch(lapsusBrutus => console.log(lapsusBrutus));