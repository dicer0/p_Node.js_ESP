/*1.- Crear un objeto de tipo Figura que herede de
    tipo triangulo y recutangulo y que compartan caracteristicas.*/
class figura{
  //Constructor
  constructor(base,altura){
    this.base = base;
    this.altura = altura;
    console.log("creando una figura");
  }
  //Getters
  getBase(){
    return this.base;
  }
  getAltura(){
    return this.altura;
  }
  //Setters
  setBase(newBase){
    this.base=newBase;
  }
  setAltura(newAltura){
    this.altura=newAltura;
  }
}

class triangulo extends figura{
  //Constructor
  constructor(base,altura,tipo,color){
    super(base,altura);
    this.tipo = tipo;
    this.color = color;
  }
  //Getters
  getTipo(){
    return this.tipo;
  }
  getColor(){
    return this.color;
  }
  //Setters
  setTipo(newTipo){
    this.tipo = newTipo;
  }
  setColor(newColor){
    this.color = newColor;
  }
}

class rectangulo extends figura{
  //Constructor
  constructor(base,altura,color){
    super(base,altura);
    this.color = color;
  }
  //Getters
  getColor(){
    return this.color;
  }
  //Setters
  setColor(newColor){
    this.color = newColor;
  }
}

var trian = new triangulo(3,5,"equilatero","rojo");
var rect = new rectangulo(6,7,"negro");
console.log(trian);
console.log(rect);

/*2.- Crearemos una supeclase llamada Electrodomestico con
    las siguientes características:
    Sus atributos son precio, color, consumo energético y peso.
    El constructor debe de pedir precio, color y peso.

    2.1.-Crearemos una subclase llamada Lavadora con las siguientes
        características:
    Su atributo es carga, ademas de los atributos heredados.
    Crear el metodo precioFinal()
    (El precio de el electrodomestico por la carga)*/
class electrodomestico{
  //Constructor
  constructor(precio,color,peso){
    this.precio = precio;
    this.color = color;
    this.peso = peso;
    console.log("creando un electrodomestico");
  }
  //Getters
  getPrecio(){
    return this.precio;
  }
  getColor(){
    return this.color;
  }
  getPeso(){
    return this.peso;
  }
  getConsumoEnergetico(){
    return this.consumoEnergetico
  }
  //Setters
  setPrecio(newPrecio){
    this.precio = newPrecio;
  }
  setColor(newColor){
    this.color = newColor;
  }
  setPeso(newPeso){
    this.peso = newPeso;
  }
  setConsumoEnergetico(newConsumoEnergetico){
    this.consumoEnergetico = newConsumoEnergetico;
  }
}

class lavadora extends electrodomestico{
  //Constructor
  constructor(precio,color,peso,carga){
    super(precio,color,peso)
    this.carga = carga;
  }
  //Getters
  getCarga(){
    return this.carga;
  }
  //Setters
  setCarga(newCarga){
    this.carga = newCarga;
  }
  //Métodos
  precioFinal(){
    return this.precio*this.carga;
  }
}

var lava = new lavadora(20,"blanca","10kg",50);
console.log(lava);
console.log(lava.precioFinal());

/*3.- Crear la clase construcción que hereda a otras dos
    clases “casa” y “edificio”
    Sus atributos son: num puertas,num ventanas ,  num piso,
        direccion, altura,largo y ancho del tereno
    Cada uno tiene un metodo que regresa los metros cuadrados
    Un metodo que regrese su direccion
    Un metodo que permita modificar su direccion*/
class construccion{
  constructor(numPuertas,numVentanas,numPiso,direccion,altura,largo,ancho){
    this.numPuertas = numPuertas;
    this.numVentanas = numVentanas;
    this.numPiso = numPiso;
    this.direccion = direccion;
    this.altura = altura;
    this.largo = largo;
    this.ancho = ancho;
  }
}
