function modoOscuro(){
document.body.classList.toggle("dark");
}
function modoOscuro(){
document.body.classList.toggle("dark-mode");
}

/* CHATBOT */

function enviarPregunta(){
let input = document.getElementById("user-input");
let texto = input.value.trim();

if(texto === "") return;

agregarMensaje(texto, "usuario");

let respuesta = responder(texto.toLowerCase());

setTimeout(() => {
    agregarMensaje(respuesta, "bot");
}, 500);

input.value = "";
}

/* MOSTRAR MENSAJES */

function agregarMensaje(texto, tipo){
let chatBox = document.getElementById("chat-box");

let div = document.createElement("div");
div.classList.add("mensaje", tipo);
div.innerText = texto;

chatBox.appendChild(div);
chatBox.scrollTop = chatBox.scrollHeight;
}

/* RESPUESTAS DEL BOT */

function responder(pregunta){

if(pregunta.includes("socrates")){
return "Sócrates fue un filósofo griego que utilizaba el diálogo para enseñar y desarrollar el pensamiento crítico.";
}

if(pregunta.includes("platon")){
return "Platón fue discípulo de Sócrates y creó la teoría de las ideas. También escribió 'La República'.";
}

if(pregunta.includes("aristoteles")){
return "Aristóteles estudió muchas áreas como lógica, ética y ciencia. Creía en la observación del mundo real.";
}

if(pregunta.includes("metafisica")){
return "La metafísica estudia la realidad, el ser y la existencia.";
}

if(pregunta.includes("etica")){
return "La ética analiza lo que es correcto o incorrecto en el comportamiento humano.";
}

if(pregunta.includes("epistemologia")){
return "La epistemología estudia el conocimiento: su origen, límites y validez.";
}

if(pregunta.includes("filosofia")){
return "La filosofía busca responder preguntas fundamentales sobre la vida, el conocimiento y la realidad.";
}

if(pregunta.includes("kant")){
return "Immanuel Kant fue un filósofo moderno que estudió cómo funciona el conocimiento humano.";
}

if(pregunta.includes("nietzsche")){
return "Nietzsche criticó la moral tradicional y habló del concepto del superhombre.";
}

/* RESPUESTA POR DEFECTO */
return "Interesante pregunta 🤔. Aún estoy aprendiendo filosofía. Intenta preguntar sobre Sócrates, Platón, Aristóteles o temas como ética o metafísica.";
}
/* QUIZ */

function responderQuiz(opcion){
let resultado = document.getElementById("resultado-quiz");

if(opcion === "b"){
resultado.innerText = "✅ Correcto. Sócrates fue el maestro de Platón.";
}else{
resultado.innerText = "❌ Incorrecto. Intenta otra vez.";
}
}

/* COMPLETAR FRASE */

function verificarFrase(){
let input = document.getElementById("frase").value.toLowerCase();
let resultado = document.getElementById("resultado-frase");

if(input.includes("nada")){
resultado.innerText = "✅ Correcto. Frase de Sócrates.";
}else{
resultado.innerText = "❌ Incorrecto. Pista: empieza con N.";
}
}

/* VERDADERO/FALSO */

function vf(respuesta){
let resultado = document.getElementById("resultado-vf");

if(respuesta === true){
resultado.innerText = "✅ Correcto.";
}else{
resultado.innerText = "❌ Incorrecto.";
}
}
