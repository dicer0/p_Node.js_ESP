var cars = ["Volvo","BMW","Ford"];
//Aquí creamos el array
console.log(cars);
/*Con ésto vemos lo que hay dentro del array*/
console.log(typeof(cars));
/*Con typeof podemos ver de qué tipo es cualquier cosa, en este caso lo que
estamos imprimiendo es de tipo objeto u object ya que array no es un tipo
primitivo*/
console.log(cars[1]);
/*Con ésto imprime específicamente el dato que esta ubicado en un índice, a la
primera posición de los indices se le asigna el número cero*/

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
/*Éste for se usa para leer todos los datos que haya en mi array pero
individualmente (ésto solo funcionará bien en la consola, en html se tendría que
hacer algo más)*/
console.log(cars);
cars.push("Nissan");
console.log(cars);
/*Con push lo que hago es agregar un elemento al final de mi array existente*/
console.log(cars);
cars.splice(1,0,"Homda");
console.log(cars);
/*El 1er número es para decirle al splice donde poner mi nuevo elemento, el
2do es para poner el # de elementos que borrará despues del lugar que le indiqué
en el 1er número incluyendo al elemento que estaba en el lugar que indiqué y el
3er lugar es para poner el elemento que agregaré a mi array*/
console.log(cars);
cars.sort();
console.log(cars);
/*Sort sirve para ordenar mis arrays cuando son de tipo string o de tipo
number*/
console.log();
cars.reverse();
console.log();
/*Reverse es para ordenar al revés*/
