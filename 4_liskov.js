/*Esto obedece algo que se llama principio de sustitución de liskov que
consiste en crear una clase padre muy abstracta y que de esta salgan ejemplos
o clases hijas que posean ya sus respectivos metodos y atributos específicos
pero que aún asi todas ellas compartan aspectos de la clase padre, asi creando
en la clase padre un tipo de molde a partir del cuál se pueden crear más cosas*/
class Largometraje {
  constructor(tiempo) {
    this.tiempo = tiempo;
  }
  getTiempo(){
    return this.tiempo;
  }
}
//Clase padre Largometraje

class Pelicula extends Largometraje{
  constructor(tiempo,genero) {
    super(tiempo)
    this.genero = genero;
  }
}
//Clase hija Pelicula

class Documental extends Largometraje{
  constructor(tiempo,director) {
    super(tiempo)
    this.director = director;
  }
}
//Clase hija Documental

/*Aquí por ejemplo se creó la clase padre Largometraje de la cual se pueden
derivar la clase hija Pelicula y la clase hija Documental donde ambas son
largometrajes, pero cada una tiene sus aspectos específicos que las diferencían
una de la otra*/

class Cine {
  constructor(largo_metraje) {
    this.largo_metraje = largo_metraje;
  }

  reproducirLargometraje(){
    return `El largometraje va a durar ${this.largo_metraje.getTiempo()}`;
  }
  //El porqué esta clase puede tener acceso al metodo getTiempo se explica abajo
}
/*Ésta clase no hereda de Largometraje, pero despúes usará como parámetro una
instancia de alguna de las clases hija dando al final el mismo resultado que si
hubiera heredado de Largometraje pudiendo usar sus atributos y métodos*/

var doc = new Documental("90 min", "El perro");
var pel = new Pelicula("120 min", "Tron");
//instancias de las clases Documental y Pelicula que heredan de Largometraje
var cine = new Cine (doc);
/*Aquí estoy agarrando un objeto que es de tipo Documental y éste por ya estar
heredando de la clase Largometraje tiene dentro de sí los diferentes métodos y
atributos de la clase padre Largometraje y de la misma clase Documental, por lo
que puedo acceder con la instancia cine a todos sus atributos y métodos*/

var rep = cine.reproducirLargometraje();
console.log(rep);
/*Ésto va a imprimir lo que dice en el metodo reproducirLargometraje pero con
el tiempo que puse dentro del objeto doc usando el metodo getTiempo de la clase
Documental.
Con esto ejemplificamos que los constructores pueden aceptar tambien objetos
como parametros, no solamente datos como numeros o Strings*/
