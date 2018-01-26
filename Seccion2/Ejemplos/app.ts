/*
let avenger={
  nombre:"Steve",
  clave:"Capitan America",
  poder:"Droga"
};

let{nombre,clave,poder}=avenger;

let nombre=avenger.nombre;
let clave=avenger.clave;
let poder =avenger.poder;


console.log(nombre,clave,poder);
----------------------
let avengers:string[]=["Thor0","Lo","La"];

let [,,d1]=avengers;

console.log(d1);
*/
/*
let prom1=new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log("Promesa terminada");

    //Termina bien
    //resolve();

    //Termina mal
    reject();

  },1500);
});

prom1.then(function(){
  console.log("Ejecutarme cuando se termine bien");
},
function(){
  console.error("Ejecutarme cuando se termine mal");
}
);
*/
/*
interface Xmen{
  nombre:string,
  poder:string
}


function enviarMision(avenger:Xmen){
  console.log(avenger.nombre);
}

let av1:Xmen={
  nombre:"",
  poder:""
};*/
/*
class Avenger{
  nombre:string;
  equipo:string;
  nombreReal:string;
  puedePelear:boolean;
  peleasGanadas:number;

  constructor(nombre:string,equipo:string,nombreReal:string){
    this.nombre=nombre;
    this.equipo=equipo;
    this.nombreReal=nombreReal;
    console.log(" Se ejecuto el constructor" );
  }

}

let antman=new Avenger();
console.log(antman);
*/

function consola(constructor:Function){
  console.log(constructor);
}


@consola
class Villano{
  constructor(public nombre:string){
    
  }
}
