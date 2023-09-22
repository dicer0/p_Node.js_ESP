const data = [1,5,3,9,10,5];
/*Aquí en la programacion funcional no existen las variables, solo se pueden
declarar constantes*/
const json = [
    {data: "hola", nombre: "Juana"},
    {data: "oli", nombre: "Panchito"},
    {data: "olo", nombre: "Pedro"}
]
/*Los dos métodos tanto map como get funcionan con arrays no con objetos*/
data.map((x,y,z) => {
    console.log(x);
    /*El parámetro "x" lo que me regresará son todos los valores de mi array*/
    console.log("-------------");
    console.log(y);
    /*El parámetro "y" me regresará el índice de cada uno de los valores de mi
    array*/
    console.log("-------------");
    console.log(z);
    /*El parametro z lo que hará es imprimir mi array el # de veces que tenga
    mi array de elementos, osea en este caso como son 6 elementos en mi array
    lo imprimirá 6 veces*/
});
/*Dentro de el metodo map se meterá un callback que maximo me regresará 3 parametros
, aqui viene lo raro que es que por cada elemento de mi array se meterá a la función
y ejecutará lo quele estoy diciendo*/

var listaNueva = json.map((x,y,z)=>{
    /*Una lista es un array pero que no tiene tamaño definido, se hace igual que un
    array*/
    return x.nombre;
    /*Esto lo que me regressará es el valor de todos los nombres de mi json y los
    pondra dentro de mi nueva variable llamada arrayNuevo*/
})
console.log("-------------");
console.log(listaNueva);

var tasks = [
    {name: "write for envato tuts+", duration:120},
    {name: "work out", duration:60},
    {name: "procrastine on duolongo", duration:140}
];

var listaNueva2 = tasks.filter((x,y,z)=>{
    return x.duration > 90;
});
/*Adentro de filter debo poner puras cosas que me retornen true o false, osea yo le
puedo meter lo que quiera dentro de mi arrow function pero en sí filter sirve para
como dice el nombre pues filtrar los valores que me lleguen para que sólo pele a los
que cumplan cierta condicion*/

console.log("-------------");
console.log(listaNueva2);
/*Esto lo que hará es imprimir lo que guardé dentro de listaNueva2 pero sólo lo que
tenga unduration mayor a 90, osea que no guardará el {name: "work out", duration:60}
pero los demás si*/

/*Los métodos que vamos a ver de map y filter no afectan a los objetos, solo
a listas o arrays, esto ya en el JSON Editor Online (que sirve para ver de forma
más bonita los json que obtenemos con las APIs) se puede visualizar más
facilmente sabiendo que sólo podemos llegar hasta donde haya estas llaves: [],
si existen estas otras: {} no podremos aplicar de forma directa a ellos, primero
deberemos acceder al array donde está contenido ese objeto y luego ya dentro de
la función es donde podremos manipular estos objetos*/
