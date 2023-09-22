/*Todo esto se visualiza en el git bash y para iniciarlo lo que debo hacer es
ponerme en el archivo Javascript donde estoy trabajando y poner el comando
node nombreDelArchivoJavascript.js
y ya para cuando lo quiero correr solo pongo ese comando de nuevo*/

//Clase padre
class animal{
  constructor(nombre,peso){
    this.nombre = nombre;
    this.peso = peso;
    console.log("creando un animal");
  }
  //Métodos de la clase padre
  getNombre(){
    return this.nombre;
  }

  comer(comida){
    return `${this.nombre} esta comiendo ${comida}`
    /*Ésta es una nueva manera de concatenar; las comillas esas raras se ponen
    con: ALT GR + la tecla que tiene ]}` , lo que lleva el signo de pesos y está
    entre llaves: ${ } son las variables que quiero concatenar, lo que no está
    entre llaves es el texto*/
  }
}

//Clase hija
class Gato extends animal{
  /*Con la instruccion extends hacemos que la clase perro herede de la clase
  animal trayendo consigo sus métodos y atributos*/
  constructor(raza, nombre, peso) {
    super(nombre,peso);
    /*Con la palabra super se llama al constructor de la clase padre para que se
    le pueda poner los atributos nombre y peso a la clase hija*/
    this.raza = raza;
  }
  //Método
  getRaza(){
    return this.raza;
  }
}

//Instancia de la clase Gato que hereda de animal
var gatito = new Gato("negro del mal", "cuscus", "10kg");

console.log(gatito);
/*Al imprimirse primero saldrán los atributos: nombre y peso. Ya que son los que
se heredan de la clase padre y despúes los demás, en consola saldrá:

Perro { nombre: 'fido', peso: '10kg', raza: 'pug' }*/

//Aquí se usa el return
var x = gatito.getRaza();
console.log(x);

/*Aquí se usó la nueva forma de concatenar con el atributo de la instancia
gatito*/
console.log(gatito.comer("caca"));
