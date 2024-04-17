/*descripcion :Ejemplo conversiones de variables y imprimir en consola
desarrolador :Jose Carlos Peña 
fecha:2024-02-16
Cambios: ninguno*/
/*const INTERVALO=10;

console.log("intervalo sera de "+ INTERVALO + " minutos con una constante");
//NTERVALO=15;nose permite por ser constante*/
/*
var intervalo=15;
console.log("intervalo sera de "+ intervalo + " minutos con una variable");
intervalo=20;
console.log("intervalo de "+ intervalo + " minutos con una variable modificada");
*/

/*let varb=true;//booleano
let varn=3.141592;//numerico
let vars="texto string";//cadena 
let var1;//idefinido

console.log("para la variable varb= "+varb+" con el tipo dato = "+ typeof varb);
console.log("para la variable varb= "+varn+" con el tipo dato = "+ typeof varn);
console.log("para la variable varb= "+vars+" con el tipo dato = "+ typeof vars);
console.log("para la variable varb= "+var1+" con el tipo dato = "+ typeof var1);

var1=vars;
console.log("para la variable varb= "+var1+" con el tipo dato = "+ typeof var1);*/

/// Definir las variables
let var1 = 15.25; // Número de punto flotante
let var2 = 0; // Número entero
let var3 = true; // Booleano verdadero
let var4 = "100"; // Cadena de texto

// Conversión implícita
varx = var1; // Se asigna var1 a varx
console.log("Valor de varx después de asignar var1:", varx+" con el tipo dato = "+ typeof varx); 

varx = var2; // Se asigna var2 a varx
console.log("Valor de varx después de asignar var2:", varx+" con el tipo dato = "+ typeof varx); 

varx=var3; // Se asigna var3 a varx
console.log("¿varx es igual a var3", varx+" con el tipo dato = "+ typeof varx); // Resultado: false

varx = var4; // Se asigna var4 a varx
console.log("Valor de varx después de asignar var4:", varx+" con el tipo dato = "+ typeof varx);

// Conversiones explícitas
varx =var1+var2; // Suma de var1 y var2
console.log("Valor de varx después de asignar var1:", varx+" con el tipo dato = "+ typeof varx); 

var3=Boolean(var2+var3); // Suma de var2 y var3 y conversión a booleano
console.log("Valor de varx después de asignar var3:", var3+" con el tipo dato = "+ typeof var3); 

varx=var1+Number(var4); // Conversión explícita de var4 a número y suma con var1
console.log("Valor de varx después de asignar var1:", varx+" con el tipo dato = "+ typeof varx); 


