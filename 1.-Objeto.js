/*Todo esto se hace en el git bash y para iniciarlo lo que debo hacer es
ponerme en el archivo Javascript donde estoy trabajando y poner el comando:

node nombreArchivoJavascript.js

Puedo no poner el nombre completo y solo poner las primeras letras y darle al
tabulador para que lo complete sólo.
Cada vez que lo quiera correr solo pongo ese comando de nuevo*/
/*Nota: en visual Studio se comenta todo lo seleccionado con:
CTRL + K ... y luego... CTRL + C*/
class perro{
  /*Esta clase es un molde para poder hacer distintos tipos de perros, osea
  que va a tener las características y funciones estandard que tiene un perro*/

  //Atributos: Son caracteristicas del objeto como:

  // color
  // tamano
  /*Aguas con poner la ñ y otros simbolos raros porque puede haber errores*/
  // peso, etc.

  /*Aquí sólo estan mencionadas para ejemplificarlas, no estan inicializadas,
  eso se hace dentro del constructor*/

  //Constructor en Javascript
  /*El Constructor es un metodo que siempre tienen las clases para inicializar
  sus atributos como en el ejemplo del perro que tenga tamaño, peso,etc.*/
  constructor (color,tamano,peso){
    this.colores = color;
    /*es recomendable llamar a la variable this de la misma manera que se llama
    el atributo pero en este caso se puso diferente para que no me confunda*/
    this.tamanos = tamano;
    this.pesos = peso;
    /*Lo que this hace es darle valores espcificos a los atributos de cada
    instancia de mi clase como por ejemplo:

    Instancia de la clase perro llamada ayudanteDeSanta:
    var ayudanteDeSanta = new perro("cafe","grande","gordo");

    Ya hecho esto, asigna ese valor que puse dentro de los paréntesis a los this
    que haya de cada atributo, como por ejemplo en este caso le asigna el valor
    de "cafe" a this.colores

    Cuando se llame desde fuera de la clase a esa variable (que por buenas
    prácticas siempre se accesa a las variables por medio de los metodos set y
    get), this se convierte en el nombre específico de esa instancia, por
    ejemplo cuando quiero accesar fuera de mi clase a la variable color, lo que
    pondría es:
    ayudanteDeSanta.getColor

    Por lo tanto la palabra this se convierte en ayudanteDeSanta que es el
    nombre de mi instancia y por ello es que this.color no se toma en sí como
    una variable*/

    console.log("el perro se hizo");
    //Para que en la concatenacion haya un enter se pone el comando \n
    console.log("el color del perro es: " + color + "\nel tamaño del perro es: " + tamano + "\nel peso del perro es: " + peso);
  }

  //Métodos: Acciones que puede realizar el objeto
  ladrar(){
    console.log("Guaaau");
  }

  correr(){
    return "run forrest run";
    /*Lo que hace el return es hacer que esa variable que le puse luego de la
    instrucción return sea un valor accesible y que lo pueda usar cuando llame
    al método correr*/
  }
  /*Aquí a diferencia de mi otro método ladrar podré acceder a lo que haya
  dentro del método en forma de valor en vez de solo imprimirlo*/

  getColor(){
    console.log(this.colores);
    /*Le puse this.colores porque esa es la "variable" a la que puede acceder el
    método ya que el atributo color en si, es inaccesible para la clase porque
    no es una variable global (despúes explicaremos los tipos de variables)*/
  }
  //Éste metodo es para poder acceder al atributo color

  setColor(newColor){
    this.colores = newColor;
  }
  //Éste metodo es para poder cambiarle el valor al atributo color
  /*Los Setters y Getters son necesarios en las clases para poder acceder a los
  valores de mis atributos*/

  suma(){
    let suma = this.peso + 12;
    console.log(suma);
  }
}

/*Instancia de una clase: Es un ejemplo de mi clase en específico, osea un perro
en especifico con su nombre su color, su tamaño, etc.*/

//Instancias
var ayudanteDeSanta = new perro("cafe","grande","gordo");
var pug = new perro("blanco", "pequeño","flaco");

console.log(ayudanteDeSanta);
console.log(pug);
/*Cuando corro mi programa este empieza a leer desde donde puse mis instancias,
luego busca el constructor de la clase perro y le asigna los valores que le dí a
los parámetros de mis instancias, después hará la/s acción/es que haya puesto
dentro de mi constructor si es que hay alguna*/

pug.ladrar();
/*Esto hace que se llame al metodo ladrar dentro de mi clase con los atributos
de pug en especifico que le asigné*/

ayudanteDeSanta.setColor("Negro");
console.log(ayudanteDeSanta);
/*Ésta linea lo que hará será imprimir las características que le había dado
a la instancia ayudanteDeSanta de mi clase perro junto con el valor que le di a
todas mis "variables this" (en si this no es una variable es más una referencia
a sí mismo y sólo tomará valor cuando lo use con el nombre de mi instancia para
convocar algun metodo).
Ya en consola no se imprimirá el nombre de la instancia y tampoco saldrá el
nombre de los atributos que le puse en los paréntesis, sino el que tienen los
this; se ve así lo que se imprime:

perro{colores: 'cafe', tamanos: 'grande', pesos: 'gordo'}*/

pug.getColor();
ayudanteDeSanta.getColor();
//Métodos get para acceder al valor del atributo color

var x = pug.correr();
console.log(x);
/*Aquí debido a que puse return en el metodo correr, al yo llamar el método me
regresa el texto "run forrest run" y luego lo guardo en mi variable x*/
