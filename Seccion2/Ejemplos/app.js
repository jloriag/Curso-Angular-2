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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
