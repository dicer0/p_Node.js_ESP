/*Hay varias maneras posibles de declarar una función y de manejar sus variables
y/o resultados*/
function operacion(){
  console.log("Ésta es una funcion normal sin parámetros y sin return");
  console.log("--------------------------------");
}
//Función normal sin parámetros y sin return
console.log(operacion());
/*Ésto se meterá a la función operacion e imprimirá el console.log pero al no
tener nada que retornar me dará undefined también despues de haber impreso el
console.log*/



function operacion1(num1, num2){
  var result = num1 * num2;
}
//Función normal con dos parámetros y sin return
console.log(`Esta es una función que normal con parámetros que NO
usa return y su resultado es: ${operacion1(2,3)}`);
console.log("--------------------------------");
/*Esto me dará undefined porque al no tener un return la variable result es
inaccesible para las cosas que estén fuera de mi funcion*/



function operacion2(numUno, numDos){
  var resultado = numUno * numDos;
  return resultado;
  /* tambien se puede poner como
     return (resultado);
     o como
     return var resultado = numUno * numDos;
     o como
     return (var resultado = numUno * numDos);
  */
}
//Función normal con dos parámetros y con return
  /*Es importante saber que las variables declaradas dentro de una función sólo
  existen dentro de esta función, si intento llamar una variable declarada
  dentro de una función desde otra función o simplemente desde fuera de la
  función tendremos un error. Al alcance que puede tener una función se le llama
  scope*/
  /*Con la sentencia return lo que estoy haciendo es permitir que el valor de mi
  variable respuesta pueda ser visible y/o convocado por otra funcion o que
  pueda ser guardado en otra variable que este afuera de mi función*/
  /*Cuando dentro de una función lleguemos a la sentencia return, la función se
  dejará de ejecutar hasta ese punto, osea que máximo puede haber un solo return
  por cada función*/
  /*Para poder acceder al valor de la variable a la que le haya dado return lo
  que se debe hacer es poner el nombre de la funcion y los parámetros si es que
  ésta tenía. Ejemplo:
  var x = myFunction(parametro1, parametro2, ...);
  Haciendo que en x se guarde el valor de la variable a la que le puse return,
  ésto obviamente se haría fuera de la función*/
var result = operacion2(2,6);
/*Con ésto estoy guardando el valor de resultado dentro de la variable result
con los parametros 2 y 6*/
console.log(`Ésta es una función que normal con parámetros que usa
return y su resultado es: ${result}`);
/*Nota: cuando concateno de esta forma para que haya un enter no es necesario
poner \n simplemente con darle enter en el codigo funciona*/

// console.log(resultado);
/*Si lo que quiero es llamar directamente a la variable que tiene el return me
dará error ya que ésta variable debido a que es de un tipo llamado local no es
accesible para llamarla desde fuera de la función, lo único que hace el return
es regresar su valor cuando ejecuto la función.
Puse como comentario la línea de código porque como da error ya no deja que
corra el resto del script*/
console.log("--------------------------------");
/*Ésto me imprimirá el valor de resultado ya que pudo ser accesible y guardado
en la variable result gracias al return*/



function operacion3(frase){
  variable = "Esta es una variable local. ";
  /*Para hacer una variable global dentro de una función lo que se debe hacer
  es NO poner la palabra reservada var, después afuera iniciar la funcion antes
  de querer llamarla y finalmente solo hay que convocarla directamente*/
  return frase;
  /*Cuando una variable es definida dentro de una función se le denomina local
  y su existencia y funcionamiento se limitan a estar dentro de la función
  solamente*/
}
//Funcion normal con un parámetro y una variable global
var frase = "Bitch"
var variable = "Esta es una variable global. "
/*Cuando una variable es definida fuera de una funcion se le llama global y
funciona en cualquier lugar del codigo; tanto dentro como fuera de las
funciones*/
/*Un mismo nombre se puede usar para dos variables si una es global y la otra
es local*/
console.log(variable);
console.log("--------------------------------");
/*Si yo llamo a la variable que esta dentro de la funcion antes de haber
llamado a la funcion la que tomará sera a la variable global que tiene el mismo
nombre*/
operacion3();
console.log(variable + operacion3(frase));
console.log("--------------------------------");
/*Así se llama a una variable global que se encuentra dentro de una función*/



function suma(a,b){
  return a+b;
}
//Funcion normal o de declaración con 2 parámetros y con return
 var sum1 = suma(3,5);
 console.log(`Esta es una funcion normal y su resultado es: ${sum1}`);
 console.log("--------------------------------");
 /*Esta es una funcion normal que ya habia aplicado antes en Javascript, en este
 caso cuando yo hago una función de esta manera, automáticamente se genera una
 variable con el nombre de la función que en este caso es suma y al yo escribir
 nombreFuncion(parametro1, parametro2)
 ya estoy ejecutando la función, así de simple*/



 var suma1 = function(a,b){
   return a+b;
 }
 //Funcion anonima o de expresión con dos parámetros
 var sum2 = suma1(3,5);
 console.log(`Esta es una funcion anónima y su resultado es: ${sum2}`);
 console.log("--------------------------------");
/*Ésta es una funcion anonima o de expresión, osea que no tiene nombre cuando
se crea, a diferencia del ejemplo anterior donde se ponia el nombre de la
función despues de la sentencia function. Esta se guarda directamente en una
variable y aunque se escriba diferente funciona exactemente igual a la funcion
normal ya que sucede lo mismo que ya habia mencionado en la de arriba de que se
crea una variable con el nombre de la función pero en este caso lo hago
manualmente y para ejecutar la función escribo también
nombreFuncion(parametro1, parametro2)*/



var suma2 = (a,b) => {
    return a+b;
}
var sum3 = suma2(3,5);
console.log(`Esta es una arrow function y su resultado es: ${sum3}`);
console.log("--------------------------------");
/*Ésta ya es una arrow function que lo que hace es resumir mas el proceso de
creacion de la funcion donde ya nisiquiera tengo que poner la palabra reservada
function y se le pone la flechita => para poner lo que va a ejecutar la
funcion*/



var suma3 = (a,b) => a+b;
var sum4 = suma3(3,5);
console.log(`Esta es una arrow function resumida y su resultado es: ${sum4}`);
console.log("--------------------------------");
/*Las arrow function también se pueden poner así, resumiendolas aún mas, si sólo
se va a usar una sola linea de ejecución para lo que va a hacer la funcion; aquí
tambien nos ahorramos el return y las llaves {} simplificando aun mas el
código*/
