// Laboratorio 1 — EcoHuerta
// Este archivo se ejecuta desde index.html (con el atributo defer).
// La interfaz está preparada, pero los controles todavía no tienen lógica.
// Construye las funciones, eventos y validaciones de las prácticas 1.6 y 1.7
// y de la actividad integradora. No elimines los id del HTML.

const anio = document.getElementById("anio");
anio.textContent = new Date().getFullYear();

// Punto de partida: crea aquí tu arreglo de cultivos, funciones y eventos.
// Revisa los criterios de la actividad integradora antes de empezar.
console.log("PRACTICA 1.6: El DOM y los eventos");
console.log("----------------------------------------------");

console.log("Actividad 1.");
const tituloCultivos = document.getElementById("cultivosTitulo");
if (tituloCultivos) {
  const tituloOriginal = tituloCultivos.textContent;
  tituloCultivos.textContent = "Nuevo Catálogo Modificado";
  console.log("Título cambiado a:", tituloCultivos.textContent);
  
  // Volvemos al texto original casi de inmediato para cumplir la prueba
  tituloCultivos.textContent = tituloOriginal;
  console.log("Título restaurado a:", tituloCultivos.textContent);
}

console.log("----------------------------------------------");
console.log("Actividad 2.");
const primeraTarjeta = document.querySelector(".crop-card");
if (primeraTarjeta) {
  console.log("Contenido de la primera tarjeta encontrada:");
  console.log(primeraTarjeta.textContent.trim());
} else {
  console.log("No se encontró ninguna tarjeta con la clase .crop-card");
}

console.log("----------------------------------------------");
console.log("Actividad 3.");
const listaEjemplo = document.getElementById("listaCultivos");
if (listaEjemplo) {
  // Crear columna
  const columnaNueva = document.createElement("div");
  columnaNueva.className = "col-md-6 col-lg-4";

  // Crear tarjeta
  const tarjetaNueva = document.createElement("article");
  tarjetaNueva.className = "card h-100 crop-card";

  // Crear cuerpo de la tarjeta
  const cuerpoNuevo = document.createElement("div");
  cuerpoNuevo.className = "card-body";

  // Crear título (Nombre)
  const nombreNuevo = document.createElement("h3");
  nombreNuevo.className = "h5";
  nombreNuevo.textContent = "Orégano";

  // Crear detalle (Estado)
  const detalleNuevo = document.createElement("p");
  detalleNuevo.className = "text-secondary";
  detalleNuevo.textContent = "Estado: crecimiento";

  // Ensamblar e insertar en el DOM
  cuerpoNuevo.append(nombreNuevo, detalleNuevo);
  tarjetaNueva.append(cuerpoNuevo);
  columnaNueva.append(tarjetaNueva);
  listaEjemplo.append(columnaNueva);
  console.log("Tarjeta dinámica de 'Orégano' agregada exitosamente.");
}

console.log("----------------------------------------------");
console.log("Actividad 4.");
/* 
Para probar listaEjemplo.replaceChildren(), descomenta la línea de abajo. 
Verás que todo el contenido desaparece de la página. 
Esto es sumamente útil para el filtro: cuando buscas un cultivo, 
primero vacías el contenedor con replaceChildren() y luego usas un ciclo for 
para dibujar dinámicamente solo las tarjetas que coinciden con tu búsqueda, evitando duplicados.
*/
// listaEjemplo.replaceChildren(); 
console.log("replaceChildren() vacía el contenedor. Útil para re-dibujar la lista actualizada sin duplicar tarjetas antiguas.");

console.log("----------------------------------------------");
console.log("Actividad 5.");
const zonaCultivos = document.getElementById("cultivos");
if (zonaCultivos) {
  const aviso = document.createElement("p");
  aviso.classList.add("alert", "alert-info");
  aviso.textContent = "Información: Los cultivos se han cargado correctamente.";
  
  // prepend() lo inserta al principio de la sección, antes del título
  zonaCultivos.prepend(aviso); 
  console.log("Aviso insertado en la sección de cultivos.");
}

console.log("----------------------------------------------");
console.log("Actividad 6.");
const campoBusqueda = document.getElementById("busqueda");
if (campoBusqueda) {
  // El evento 'input' se dispara con cada tecla presionada.
  // El evento 'change' se dispara SOLO cuando presionas Enter o haces clic fuera del input.
  campoBusqueda.addEventListener("change", () => {
    const textoEscrito = campoBusqueda.value.trim().toLowerCase();
    console.log("El usuario terminó de escribir (evento change):", textoEscrito);
  });
}

console.log("----------------------------------------------");
console.log("Depuración 1.6:");
// Error intencional: document.getElementByID("listaCultivos");
// Explicación: Lanza un TypeError porque "getElementByID" (con D mayúscula) no existe.
console.log("El método correcto es document.getElementById (con la 'd' minúscula).");