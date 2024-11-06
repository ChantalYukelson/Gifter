function openChatbot() {
  document.getElementById("chatbot").style.display = "block";
  document.getElementById("chatbot-question").innerText = preguntas[0];
  document.getElementById("chatbot-response").value = ""; // Limpia la respuesta
  document.getElementById("hobbies-options").style.display = "none";
}

function closeChatbot() {
  document.getElementById("chatbot").style.display = "none";
  preguntaIndex = 0;  // Reinicia el índice de preguntas
}

let preguntaIndex = 0;
const preguntas = [
  "¿A quién querés hacerle un regalo hoy?",
  "¿Para qué ocasión es el regalo?",
  "¿Cuál es la edad de la persona?",
  "¿Tiene algún interés o hobby específico?"
];

function siguientePregunta() {
  const respuesta = document.getElementById("chatbot-response").value;

  if (preguntaIndex < preguntas.length - 1) {
    // Almacena la respuesta para el uso futuro (puedes guardarla en una variable o base de datos)
    console.log(`Respuesta a "${preguntas[preguntaIndex]}": ${respuesta}`);

    preguntaIndex++;

    if (preguntaIndex === 3) {
      // Muestra opciones de hobbies en la última pregunta
      document.getElementById("hobbies-options").style.display = "block";
      document.getElementById("chatbot-response").style.display = "none";
      document.getElementById("siguiente-btn").textContent = "Finalizar";
    } else {
      document.getElementById("chatbot-question").innerText = preguntas[preguntaIndex];
      document.getElementById("chatbot-response").value = "";  // Limpia la respuesta para la siguiente pregunta
    }
  } else {
    obtenerHobbiesSeleccionados();
    alert("¡Gracias! Te mostraremos algunas recomendaciones.");
    closeChatbot();
  }
}

function obtenerHobbiesSeleccionados() {
  const hobbiesSeleccionados = Array.from(document.querySelectorAll('#hobbies-options input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);

  console.log("Hobbies seleccionados:", hobbiesSeleccionados);  // Puedes guardarlo o procesarlo
}
