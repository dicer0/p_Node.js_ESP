// 1.- Crear un objeto de tipo triangulo con atrinutos base
//     y altura y tener el metodo  area y perimetro.
// 2.- Crear un objeto tipo cuadrado y obtener el perimetro y area.
// 3.- Crear un objeto tipo rectangulo y obtener el perimetro y area.

//Clase triangulos
class triangulos{
  //Constructor
  constructor(l1t,l2t,l3t){
    this.l1t = l1t;
    this.l2t = l2t;
    this.l3t = l3t;
  }

  //Métodos
  area(){
    var s = (this.l1t+this.l2t+this.l3t)/2;
    var a = s*(s-this.l1t)*(s-this.l2t)*(s-this.l3t);
    var Area_T = Math.sqrt(a);
    console.log("El area es:" + Area_T);
  }
  perimetro(){
    var Peri_T = this.l1t+this.l2t+this.l3t;
    console.log("El perimetro es:" + Peri_T);
  }
}

//Clase cuadrilateros
class cuadrilateros{
  //Constructor
  constructor(l1c,l2c){
    this.l1c = l1c;
    this.l2c = l2c;
  }

  //Métodos
  area(){
    if(this.l1c != this.l2c){
      console.log("tu figura es un rectangulo");
    }else {
      console.log("tu figura es un cuadrado");
    }
    /*Los ifs, los for o cualquier cosa que ponga debe ir dentro de un metodo ó
    del constructor sino me dará error*/
    var Area_C = this.l1c*this.l2c;
    console.log("El area es:" + Area_C);
  }

  perimetro(){
    if(this.l1c != this.l2c){
      console.log("tu figura es un rectangulo");
    }else {
      console.log("tu figura es un cuadrado");
    }
    /*Los ifs los for o cualquier cosa que ponga debe ir dentro de un metodo
    o de el constructor sino me dará error*/
    var Peri_C = 2*this.l1c+2*this.l2c;
    console.log("El perimetro es:" + Peri_C);
  }
}

var triangulo = new triangulos(1,2,3);
var cuadrado = new cuadrilateros(2,2);
var rectangulo = new cuadrilateros(2,3);

console.log(triangulo.area());
console.log(cuadrado);
console.log(rectangulo);
