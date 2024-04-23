//generarar un array de 10 elementos
//nombre :"juan " nota:randomico de 20-100
//-mostrar la nota mayor , menor y promedio
// Función para generar un número aleatorio entre min y max (ambos incluidos)
// Array de nombres de estudiantes
let nombres = ["Juan", "María", "Pedro", "Ana", "Carlos", "Sofía", "Luis", "Laura", "Diego", "Elena"];

// Función para generar un número aleatorio entre min y max (ambos incluidos)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generar un array de objetos con nombres y notas aleatorias
let estudiantes = nombres.map(nombre => ({ nombre, nota: getRandomNumber(20, 100) }));

// Mostrar el array generado
console.log("Array de estudiantes:", estudiantes);

// Encontrar la nota mayor, la nota menor y calcular el promedio
let notas = estudiantes.map(estudiante => estudiante.nota);
let notaMayor = Math.max(...notas);
let notaMenor = Math.min(...notas);
let sumaNotas = notas.reduce((total, nota) => total + nota, 0);
let promedio = sumaNotas / estudiantes.length;

// Mostrar los resultados
console.log("Nota mayor:", notaMayor);
console.log("Nota menor:", notaMenor);
console.log("Promedio:", promedio.toFixed(2));
