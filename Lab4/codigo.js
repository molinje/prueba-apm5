var dias =["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];
//alert( "Esto es un Array" + "" + dias);

var Numero1 = 10;
var Numero2 = 30;
var Numero3 = 0;

var resultado = Numero1 + Numero2;

function Suma_valores(Numero1, Numero2) {

  var TotalSum = Numero1 + Numero2;
  return TotalSum ;
}
 
//var TotalSuma = Suma_valores(Numero1, Numero2);
//alert( "El resultado de la funcion es " + " " + Suma_valores(Numero1, Numero2));
console.log( "El resultado de la funcion es " + " " + Suma_valores(Numero1, Numero2));


function Persona(Nombre) {
  this.Nombre = Nombre;
}

Persona.prototype.Saludo = function() {
  //alert ('Hola, Soy ' + this.primerNombre);
};

var persona1 = new Persona("Carlos");
var persona2 = new Persona("Juan carlos");


persona1.Saludo();
persona2.Saludo(); 
