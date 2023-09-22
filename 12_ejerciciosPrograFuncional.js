/*1.-Escribe una funcion que tome una cadena de palabras en mayusculas y la regrese en minusculas.
        Entrada: [“HOLA”,“COMO”,“ESTAS”]
        Salida: [“hola”,“como”,“estas”]*/

const Entrada = ["HOLA","COMO","ESTAS"];

var Salida = Entrada.map((x,y,z)=>{
    return x.toLowerCase();
});

console.log(Salida);

/*2.- Crea una funcion que reciba como parametro una cadena de palabras y devuelva la cadena de caracteres 
modificadas en mayusculas y minusculas.
        Entrada:[“hola”,“amigos”,“de”,“cinta”,“roja”]
        Salida:[“HOLA”,“amigos”,“DE”,“cinta”,“ROJA”]

        Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
        Saloida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,“YEI”]*/

const Entrada1 =  ["hola","amigos","de","cinta","roja"];
const Entrada2 = ["hola amigos", "cinta roja cdmx y gdl","yei"];   

var SalidaM = Entrada1.map((x,y,z)=>{
    return x.toUpperCase();
});

console.log(SalidaM);