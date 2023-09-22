/*Cuando yo corro mi programa de Javascript, inmediatamente se manda mi archivo
hacia la pila de ejecución, que es donde se van ejecutando las instrucciones de
mi programa y mi 1er comando lo acomodará hasta abajo. Los comandos los va
acomodando de abajo hacia arriba dependiendo del órden de cómo le vayan
llegando, por lo que si en mi archivo primero va una instrucción y luego va otra
éste acomodará la última instrucción encima de la 1era que le envié e irá
ejecutandolos en orden de abajo hacia arriba, poniendo siempre hasta abajo el
1er comando que le fue enviado. Ya que se haya vaciado la pila de ejecución, se
terminará de correr mi programa. Pero fuera del orden de cómo le vaya enviando
mis instrucciones o comandos, por el simple hecho de que Javascript corre de
forma asíncrona, éste orden de ejecución se puede ver afectado dependiendo del
tiempo que le tome para correr cada instrucción, por lo que si un comando va a
tardar mucho tiempo en correrse, lo que se hará es que cuando ya se encuentre en
la pila de ejecución, lo mandará hacia la cola de ejecución, que es donde se
ponen las instrucciones que se ejecutarán después, y aquí mi comando esperará a
que se vacíe la pila de ejecución para que pueda volver a la pila de ejecución
para ser corrido y esto pasará cuando todo lo que había en la pila de ejecución
ya haya sido realizado para que ahora si ya pueda ser corrido lo que haya en la
cola de ejecución.

  Archivo Javascript => pila de ejecución
                              ó
                     => cola de ejecución

Archivo Javascript: Éste manda los comandos a la pila de ejecucion y/o a la cola
de ejecucion.

Pila de ejecucion: Aquí se ejecutan los comandos que mando de mi Javascript,
cuando ésta esté vacía mi programa regresará los comandos que haya en mi cola
de ejecución para poder correrlos.

Cola de ejecucion: Aquí se mandan los comandos que quiera que se esperen
tantito con un setTimeout o se mandan solitos los comandos que tarden más en
ejecutarse, como por ejemplo ir a una base de datos u otra cosa por el estilo
que tarde mucho tiempo.*/

/*Javascript lee de arriba hacia abajo mis comandos y los manda asi a la pila
de ejecución donde los acomodará de abajo hacia arriba para ejecutarlos*/
console.log(1);
console.log(2);
console.log(3);
console.log("----------Flujo normal de la ejecución de mi codigo----------");
/*Aquí la ejecución de nuestras 3 líneas de código se dan normalmente en el
orden en el que las puse porque no hay ningun comando que tarde de más en
correr por lo que en consola me imprimira 1,2,3*/



console.log(1);
setTimeout(function callback(){
  console.log(2)
}, 3000)
/*Un callback ocurre cuando a un método o a una función cualquiera se le pasa
como parámetro otra función, a la cuál se le llama callback, el metodo en
específico que está arriba se llama setTimeout y es un ejemplo de un callback,
éste tiene dentro el elemento que voy a mandar a mi cola de ejecución, esto
ocurre porque lo que el metodo hace es llamar a la función callback después de
un tiempo determinado mandándo así la instrucción que hay dentro un tiempo
definido a la cola de ejecución, el 2do parámetro es un numero que me dirá
cuantos milisegundos mandará mi comando a la cola y ya después de que pase ese
tiempo lo dejará regresar a la pila para que pueda ser ejecutado.*/

/*Con el método setTimeout enviamos comandos a la cola y con el mismo método lo
regresamos a la pila de ejecución para que sea corrida la instrucción.
-Como un callback es una funcion normal, puede tener los parámetros que sean
dentro de sus parentesis.
-Siempre el 1er parametro que estará dentro de los parentesis de mi callback
será el error, después veremos para qué sirven estos parámetros
-Los callback se van anidando porque en vez de poner el comando que se hará
dentro de las llaves se pondria el otro callback que se anidará dentro de éste*/

/*Ventajas:
-Es sencillo de usar ya que es una funcion con otra funcion dentro.
-Puede solucionar los poblemas de flujo de una aplicación.
-Ayuda a manejar las excepciones (o errores).
-Son utiles para hacer consultas a base de datos o servicios web, en esto es en
sí para lo que los vamos a usar*/

/*Desventajas:
-Si se usa demasiado se puede caer en algo llamado "callback hell" que es cuando
el programa o el programador mismo se puede confundir debido al uso excesivo de
los callbacks anidados. Muchas veces los callbacks se anidan porque a veces para
obtener un dato se debe conseguir otro antes para poder acceder a él, por ello
se debe anidar un callback dentro de otro y cuando son muchos callbacks anidados
es cuando se crea el callback hell, normalmente después de los 5 callbacks
anidados ya tendremos problemas en leer nuestro código.*/
console.log(3);
/*Aquí ya entra en juego la cola de ejecución debido a nuestro método
setTimeout por lo que no se imprimirá en pantalla 1,2,3 sino que se imprimirá
el 1, luego enviará el 2 a la cola, imprimirá el 3 y después de los
milisegundos que le indiqué regresará mi comando a la pila e imprimirá el 2*/


/*Cuello de botella: Esto se hace para bloquear la pila de ejecución y que no
se pueda vaciar, por lo que lo que está en la cola de ejecución no pueda
regresar y no se ejecute*/
console.log(1);
console.log(2);
/*function callback hecha con un arrow function, callback no es una palabra
reservada solo es el nombre equis que se le pone a la funcion*/
console.log("----------Flujo parado por un cuello de botella----------");
for (var i = 0; i < 9999999999; i++){

}
/*el for es el que hace el cuello de botella ya que traba el programa
completamente al hacer que la pila de ejecución este trabajando, hasta que
termine de correr al for, ya traerá el comando que mandamos a la cola de
ejecución con nuestro callback*/
setTimeout(()=>{
  console.log(3);
},5000)
