let a = 10;
let b = 5;
a = a + 1; // Incrementar 'a' en 1
console.log(a); // Imprimir 'a', que ahora es 11

a = a + b; // Sumar 'a' y 'b' y asignar el resultado a 'a'
console.log("a + b = " + a); // Imprimir el resultado de la suma

a += b; // Forma abreviada de incrementar 'a' por 'b'
console.log("a + b = " + a); // Imprimir el resultado de la suma

a = 11;
a += b; // Error de sintaxis, no se puede incrementar el valor de 1
console.log("a + b = " + a); // Esto no se ejecutará debido al error

a++; // Incrementar 'a' en 1
console.log("a++: " + a); // Imprimir 'a', que ahora es 12

a--; // Decrementar 'a' en 1
console.log("a--: " + a); // Imprimir 'a', que ahora es 11

if (a % 2 == 0) {
    console.log("a es Par"); // Si 'a' es par, imprimir "a es Par"
} else {
    console.log("a es impar"); // Si 'a' es impar, imprimir "a es impar"
}

console.log(a + b + Number("5")); // Sumar 'a', 'b' y el número 5 convertido a número
