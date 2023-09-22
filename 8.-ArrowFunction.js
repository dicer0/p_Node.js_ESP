/*1.- Hacer una función que convierta de grados centígrados a Farenheit.*/
var convetidorF = gradosC => {return gradosC*33.8}

var gradosF = convetidorF(2);
console.log(`grados Fahrenheit: ${gradosF}`);

/*2.- Hacer una función que muestre la tabla de multiplicar de un número.*/
var Multiplicar = num => {
  var mult = [];
  if (num < 10) {
    for (var i = 1; i < 11; i++) {
      // return mult.push(num*i);
      /*Cuando mi funcion llega a cualquier instruccion de return, este dice, ah
      mi trabajo se acabo; y se sale de la funcion por lo que hay que tener
      cuidado donde lo ponemos, pero es importante recordar que si debe estar
      indicado el return para que evetualmente nos regrese algo nuestra
      funcion*/
      mult.push(num*i);
      //esta es la forma correcta de poner la instruccion en este caso
    }
  }else {
    mult.push("numero no admisible");
  }
  return mult;
}

var tMultiplicar = Multiplicar(2);
console.log(`tabla de multiplicar: ${tMultiplicar}`);

/*3.- Pasar de decimal a binario*/
var Binario = Decimal => {
  for (var i = Decimal; i = 1 ; i++) {
    
  }
}
