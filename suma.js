/*descripcion :Ejemplo de suma de dos sumeros por consola
desarrolador :Jose Carlos Peña 
fecha:2024-02-15
Cambios: ninguno
*/
// Solicitar al usuario que ingrese dos números
var num1 = prompt("Ingresa el primer número:");
var num2 = prompt("Ingresa el segundo número:");

// Convertir los valores ingresados a números
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Verificar si los valores son válidos
if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, ingresa números válidos.");
} else {
    // Calcular la suma
    var suma = num1 + num2;

    // Mostrar el resultado en la consola del navegador
    console.log("La suma de " + num1 + " + " + num2 + " = " + suma);
}
