/*Promesas:
Para ejemplificarlo pensamos en mcdonald´s en donde cuando pides una
hamburguesa se te da un ticket no en sí la hamburguesa, pero este ticket sirve
para que después se te de tu hamburguesa.
Pero en sí una promesa es un callback pero que resuelve el problema del
"callback hell"*/

/*Callback*/
setTimeout(function callback(){
  console.log(2)
}, 3000)

/*Promise*/
const promise = new Promise((resolve, reject) => {
  const number = 4;
  setTimeout(
    () => {
      if (number > 5) {
        resolve(number)
      }else {
        reject(new Error("Menor a 5"))
      }
    },3000);
});

promise.then(x => console.log(x));
/*El then es un metodo de la clase promise de la cual hice mi instancia llamada
promise igual pero con minúsculas el cual cachará el resultado que me lance el
resolve si es que se cumple su condicion dentro del promise y se guardará en mi
variable x*/
promise.catch( err => console.log(err));
/*El catch hara lo mismo que el then pero con el reject por si no se cumple el
if y en vez se cumple el else, el resultado que me dará se guardará en la
variable err*/


/*Alternarios: es un tipo de if y else pero resumidos o puestos de una manera
más simple*/
const promise = new Promise((resolve, reject) => {
  const number = 6;
  setTimeout(
    () => { number > 5
        ? resolve(number)
        :  reject(new Error("Menor a 5"))
    },3000);
});
promise.then(x => console.log(x));
promise.catch( err => console.log(err));
/*Esto se puede usar siempre en cualquier archivo javascript en vez de los ifs y
los else pero estos se usan porque para llamar cosas a bases de datos no se
pueden usar ifs o else*/

/**/
function random(number){
  return new Promise ((resolve, reject) => {
    setTimeout(
      () => { number > 5
          ? resolve(number)
          : reject(new Error ("Menor a 5"));
      },3000);
  });
}

randomPromise(10).then(number => console.log(number));
randomPromise(10).catch(err => console.log(err));
