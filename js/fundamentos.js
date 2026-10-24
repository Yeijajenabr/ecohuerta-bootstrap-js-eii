// Laboratorio 1 — EcoHuerta
// Escribe debajo los ejemplos de las prácticas 1.1 a 1.5.
// Guarda este archivo y recarga fundamentos.html para ver la salida en la Consola.

console.log("EcoHuerta: JavaScript conectado correctamente.");
console.log("PRACTICA 1.1:");
console.log("----------------------------------------------");
console.log("Bienvenido a EcoHuerta");
console.log(8 + 5);
console.log("8" + 5);
console.warn("Este cultivo necesita revisión");

console.log("----------------------------------------------");
console.log("1.");
console.log("Yeisson Pedraza");
console.log("Este Cultivo es de Zanahoria");
console.log("----------------------------------------------");
console.log("2.");
console.log("Cuantas plantas hay en cuatro filas de 7 plantas?");

console.log("Respuesta: Hay " + (4 * 7) + " plantas en total.");

console.log("----------------------------------------------");
console.log("3.");
console.log("Cuantos litros hacen falta para regar 8 plantas si cada planta necesita 2 litros?");
console.log("Respuesta: Se necesitan " + (8 * 2) + " litros en total.");

console.log("----------------------------------------------");
console.log("4.");
console.log("El resultado de ejecutar console.log(20/4) es:"+ (20/4));
console.log("El resultado de ejecutar console.log(20%6) es:"+ (20%6));
console.log("El resultado de ejecutar console.log(2**3 ) es:"+ (2**3));

console.log("----------------------------------------------");
console.log("5.");
console.warn("La diferencia entre un error que aparece en la Consola y una advertencia que envias con console.warn() es que el error indica un problema en el código que impide su ejecución correcta, mientras que la advertencia es un mensaje informativo que no detiene la ejecución del código pero indica que algo podría no estar funcionando como se espera");

/* La diferencia entre un error que aparece en la Consola y una advertencia que envias con console.warn() 
es que el error indica un problema en el código que impide su ejecución correcta, mientras que la advertencia 
es un mensaje informativo que no detiene la ejecución del código pero indica que algo podría no estar funcionando como se espera. */

console.log("Cultivo registrado.");
console.log("----------------------------------------------");
console.log("");
console.log("PRACTICA 1.2:");
console.log("----------------------------------------------");
const cultivoInicial = "Tomate";
let diasIniciales = 15;
const aguaSemanalInicial = 4.5;
const necesitaSolInicial = true;

console.log(cultivoInicial);
console.log(typeof cultivoInicial);
console.log(typeof diasIniciales);
console.log(typeof necesitaSolInicial);

diasIniciales = diasIniciales + 7;
console.log(diasIniciales);
console.log(aguaSemanalInicial * 3);

const cantidadTexto = "12";
const cantidadNumero = Number(cantidadTexto);

console.log(cantidadTexto + 3);
console.log(cantidadNumero + 3);
console.log(Number("doce"));
console.log(Number.isNaN(Number("doce")));
console.log(12 === "12");

console.log("----------------------------------------------");
const nombreDePrueba = "Rábano";  // Declara y asigna una cadena
let unidadesDePrueba = 8;        // Declara un número que puede cambiar
unidadesDePrueba = 12;           // Reasigna el valor anterior

console.log(nombreDePrueba);
console.log(unidadesDePrueba);
console.log(typeof unidadesDePrueba);
console.log("----------------------------------------------");
let pendienteDeAsignacion;
const datoAusente = null;

console.log(pendienteDeAsignacion); // undefined
console.log(datoAusente);          // null
console.log(typeof pendienteDeAsignacion); // "undefined"
console.log("----------------------------------------------");

const precioDePrueba = 2500;
const cantidadDePrueba = 3;
const descuentoDePrueba = 1000;

console.log(precioDePrueba * cantidadDePrueba);
console.log(precioDePrueba * cantidadDePrueba - descuentoDePrueba);
console.log(cantidadDePrueba >= 3);
console.log(cantidadDePrueba === "3");
console.log(cantidadDePrueba !== 0);
console.log("----------------------------------------------");

console.log(Number(""));
console.log(Number("-3"));
console.log(Number("2,5"));
console.log("----------------------------------------------");
console.log("1.");
const nombreProducto = "Lechuga";
let precioUnitario = 1500;
let unidadesDisponibles = 10;
let disponibleParaVenta = true;
console.log(typeof nombreProducto);
console.log(typeof precioUnitario);
console.log(typeof unidadesDisponibles);
console.log(typeof disponibleParaVenta);
console.log("----------------------------------------------");
console.log("2.");
let valorDiezUnidades = precioUnitario*10
let valorSieteUnidades = precioUnitario*7
let diferenciaValor = valorDiezUnidades - valorSieteUnidades
console.log("El valor de 10 unidades es: " + valorDiezUnidades);
console.log("El valor de 7 unidades es: " + valorSieteUnidades);
console.log("La diferencia entre el valor de 10 y 7 unidades es: " + diferenciaValor);

/* 
Voy a usar const en una variable que no cambiará su valor, 
como el nombre del producto, y let en una variable que puede cambiar su valor, como el precio unitario o la cantidad disponible.
*/
console.log("----------------------------------------------");
console.log("3.");
console.log("El resultado de 10 + 2 * 3, es: "+ (10 + 2 * 3));
console.log("El resultado de (10+2) * 3), es: "+ ((10+2) * 3));

console.log("----------------------------------------------");
console.log("4.");
console.log("El resultado de 10 > 8 es: "+ (10 > 8));
console.log("El resultado de 10 <= 8 es: "+ (10 <= 8));
console.log("El resultado de 10 !== 10 es: "+ (10 !== "10"));
console.log("El resultado de 5 === 5 es: "+ (5 === 5));
console.log("El resultado de 5 == \"5\" es: "+ (5 == "5"));

console.log("----------------------------------------------");
console.log("5.");

const costoAgua = 3.5 * 4 * 250;
console.log("El costo de regar 4 plantas durante 250 días es: " + costoAgua);
console.log("----------------------------------------------");
console.log("6.");

let contador = 5;
contador += 1;
console.log("El valor de contador después de incrementar en 1 es: " + contador);

contador -= 2;
console.log("El valor de contador después de decrementar en 2 es: " + contador);

contador *= 3;
console.log("El valor de contador después de multiplicar por 3 es: " + contador);


let diasDePrueba = 10;
diasDePrueba = 11;
console.log(diasDePrueba);

console.log("----------------------------------------------");
console.log("");
console.log("PRACTICA 1.3:");
console.log("----------------------------------------------");
console.log("Ejemplo guiado: humedad");
const humedadEjemplo = 61;

if (humedadEjemplo < 30) {
  console.log("Humedad baja");
} else if (humedadEjemplo <= 60) {
  console.log("Humedad adecuada");
} else {
  console.log("Humedad alta");
}
console.log("----------------------------------------------");
console.log("Condiciones combinadas");
const temperaturaEjemplo = 24;
const tieneAguaEjemplo = false;

if (temperaturaEjemplo >= 18 && temperaturaEjemplo <= 30 && tieneAguaEjemplo) {
  console.log("Se cumplen las condiciones de la simulación");
} else {
  console.log("Revisar condiciones");
}

console.log("----------------------------------------------");
console.log("operadores logicos: AND, OR y NOT");

const litrosDisponibles = 4;
const temperaturaActual = 34;
const revisarPorAgua = litrosDisponibles < 2;
const revisarPorCalor = temperaturaActual > 30;

console.log(revisarPorAgua && revisarPorCalor); // Ambas condiciones
console.log(revisarPorAgua || revisarPorCalor); // Al menos una condición
console.log(!revisarPorAgua);                   // Invierte el booleano

console.log("----------------------------------------------");
console.log("Actividad");
console.log("1. ¿Qué mensaje se mostrará en la consola si la variable cantidad es igual a 0, 1, 5 o 6?");

let cantidad = 6;
if (cantidad === 0) {
  console.log("sin existencias");
} else if (cantidad > 0 && cantidad <= 5) {
  console.log("Existencias bajas");
} else {
  console.log("Disponible");
}

console.log("----------------------------------------------");
console.log("2. ¿Qué mensaje se mostrará en la consola si la calificación es cambia a valores como:-1, 0, 59, 60, 79, 80, 100 y 101?");

let calificacion = 80; 

if (calificacion < 0 || calificacion > 100) {
    console.log("Calificación inválida");
} else if (calificacion <= 59) {
    console.log("Por mejorar");
} else if (calificacion <= 79) {
    console.log("Aceptable");
} else {
    console.log("Destacado");
}


console.log("----------------------------------------------");
console.log("3. ");

let estado = "crecimiento";
let agua = 1.5;

if (estado === "crecimiento" && agua < 2) {
    console.log("Aviso: Revisar cultivo");
}

console.log("----------------------------------------------");
console.log("4. ");

let estadoPrueba = "semilla";

if (estadoPrueba === "cosecha") {
  console.log("Listo para cosechar");
} else if (estadoPrueba === "semilla") {
  console.log("En etapa de semilla");
} else {
  console.log("Estado no reconocido");
}


console.log("----------------------------------------------");
console.log("PRACTICA 1.4:");
console.log("----------------------------------------------");

const litrosRegistrados = [2, 3.5, 4, 1.5];
let totalLitros = 0;

for (let indice = 0; indice < litrosRegistrados.length; indice++) {
  totalLitros += litrosRegistrados[indice];
}

console.log(totalLitros);
console.log(litrosRegistrados[0]);
console.log(litrosRegistrados.length);
console.log("----------------------------------------------");

const herramientas = ["Pala", "Regadera", "Guantes"];
herramientas.push("Rastrillo");
console.log(herramientas.includes("Regadera"));
console.log(herramientas[1]);
herramientas.splice(0, 1);
console.log(herramientas);
for (const herramienta of herramientas) {
  console.log("Herramienta: " + herramienta);
}


let intentosEjemplo = 0;
while (intentosEjemplo < 3) {
  console.log("Intento " + (intentosEjemplo + 1));
  intentosEjemplo++;
}

const diasObservados = [5, 10, 15];

for (let posicion = 0; posicion < diasObservados.length; posicion++) {
  console.log("Índice:", posicion, "Valor:", diasObservados[posicion]);
}

console.log("----------------------------------------------");

const cantidadesDePrueba = [4, 7, 2];

for (let i = 0; i < cantidadesDePrueba.length; i++) {
  console.log("Posición " + i + ": " + cantidadesDePrueba[i]);
}

for (const cantidad of cantidadesDePrueba) {
  console.log("Cantidad: " + cantidad);
}
console.log("----------------------------------------------");
console.log("Actividad");
console.log("1. ");
const cultivos = ["Zanahoria", "Papa", "Cebolla", "Espinaca", "Calabaza"];

console.log("Primer cultivo:", cultivos[0]);


console.log("Último cultivo:", cultivos[cultivos.length - 1]);
console.log("----------------------------------------------");
console.log("2. ");
// Usamos push() para agregar al final
cultivos.push("Brócoli"); 

// Usamos pop() para eliminar el último, o shift() para el primero. Usemos shift() aquí:
cultivos.shift(); 

console.log("Nueva longitud:", cultivos.length); // Mostrará 5 (agregamos 1 y quitamos 1)

console.log("----------------------------------------------");
console.log("3. ");
const valores = [12, 8, 15, 5, 10];
let suma = 0;

for (let i = 0; i < valores.length; i++) {
  suma += valores[i];
}

let promedio = suma / valores.length;

console.log("Suma:", suma);         // Esperado: 50
console.log("Promedio:", promedio); // Esperado: 10

console.log("----------------------------------------------");
console.log("4.");
const existencias = [2, 0, 3, 0, 1];
let agotadas = 0;
for (let i = 0; i < existencias.length; i++) {
  if (existencias[i] === 0) {
    agotadas++;
  }
}
console.log("Valores con existencias agotadas:", agotadas);

console.log("----------------------------------------------");
console.log("5.");
const listaCultivos = ["Tomate", "Lechuga", "Maíz"];
for (let i = 0; i < listaCultivos.length; i++) {
  console.log((i + 1) + ". " + listaCultivos[i]);
}

console.log("----------------------------------------------");
console.log("6.");
const arregloVacio = [];
if (arregloVacio.length === 0) {
  console.log("El arreglo está vacío. No se puede calcular el promedio porque no se puede dividir entre 0.");
} else {
  // Lógica de promedio si hubiera datos
}

console.log("----------------------------------------------");
console.log("Depuración 1.4:");
const nombresPrueba = ["Tomate", "Papa", "Maíz"];
// Se corrige el límite del ciclo: de i <= nombresPrueba.length a i < nombresPrueba.length
for (let i = 0; i < nombresPrueba.length; i++) {
  console.log("Posición " + i + ":", nombresPrueba[i].toUpperCase());
}

console.log("----------------------------------------------");
console.log("");
console.log("PRACTICA 1.5:");
console.log("----------------------------------------------");

const cultivoEjemplo = {
  nombre: "Tomate",
  dias: 85,
  agua: 7,
  estado: "cosecha"
};

const cultivosDeEjemplo = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];

console.log("Actividad 1.");
cultivoEjemplo.responsable = "Yeisson Pedraza";
cultivoEjemplo.estado = "crecimiento";
console.log(cultivoEjemplo.nombre + " a cargo de " + cultivoEjemplo.responsable + " está en estado de " + cultivoEjemplo.estado);

console.log("----------------------------------------------");
console.log("Actividad 2.");
function esCantidadValida(cantidad) {
  return typeof cantidad === 'number' && Number.isFinite(cantidad) && cantidad >= 0;
}
console.log("¿0 es válido?:", esCantidadValida(0));
console.log("¿2.5 es válido?:", esCantidadValida(2.5));
console.log("¿-1 es válido?:", esCantidadValida(-1));
console.log("¿NaN es válido?:", esCantidadValida(NaN));
console.log("¿Infinity es válido?:", esCantidadValida(Infinity));

console.log("----------------------------------------------");
console.log("Actividad 3.");
function contarPorEstado(lista, estadoBuscado) {
  let contador = 0;
  for (const cultivo of lista) {
    if (cultivo.estado === estadoBuscado) {
      contador++;
    }
  }
  return contador;
}
console.log("Cultivos en cosecha:", contarPorEstado(cultivosDeEjemplo, "cosecha"));
console.log("Cultivos en crecimiento:", contarPorEstado(cultivosDeEjemplo, "crecimiento"));

console.log("----------------------------------------------");
console.log("Actividad 4.");
function calcularPromedioAgua(lista) {
  if (lista.length === 0) return 0;
  
  let sumaAgua = 0;
  for (const cultivo of lista) {
    sumaAgua += cultivo.agua;
  }
  return sumaAgua / lista.length;
}
console.log("Promedio de agua semanal:", calcularPromedioAgua(cultivosDeEjemplo));

console.log("----------------------------------------------");
console.log("Actividad 5.");
const inventarioTienda = [
  { nombre: "Pala", precio: 25000, existencias: 3 },
  { nombre: "Regadera", precio: 15000, existencias: 5 },
  { nombre: "Abono", precio: 8000, existencias: 10 }
];

function calcularValorInventario(listaProductos) {
  let valorTotal = 0;
  for (const producto of listaProductos) {
    valorTotal += (producto.precio * producto.existencias);
  }
  return valorTotal;
}
console.log("Valor total del inventario:", calcularValorInventario(inventarioTienda));

console.log("----------------------------------------------");
console.log("Actividad 6.");
cultivosDeEjemplo[0].estado = "semilla";
console.log("Estado del primer cultivo:", cultivosDeEjemplo[0].estado);
console.log("Estado del segundo cultivo:", cultivosDeEjemplo[1].estado); 
// Comprobación: Modificar el primero no afectó al segundo.

console.log("----------------------------------------------");
console.log("Depuración 1.5:");
function obtenerTotal(precio, cantidad) {
  const resultado = precio * cantidad;
  return resultado; // Faltaba la instrucción return para poder usar el valor fuera
}
console.log("El total corregido es:", obtenerTotal(2000, 3));

console.log("----------------------------------------------");
