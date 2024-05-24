const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() === '') return;
  appendMessage('user', userMessage);
  const botReply = getBotReply(userMessage); // Obteniendo la respuesta del bot
  appendMessage('bot', botReply);
  userInput.value = '';
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(userMessage) {
  // Simplemente respondiendo con un mensaje predefinido por ahora
  if (userMessage.toLowerCase().includes('hola')) {
    return '¡Hola! ¿Cómo estás?';
  } else if (userMessage.toLowerCase().includes('bien')) {
    return 'Me alegra escuchar eso.';
  } else if (userMessage.toLowerCase().includes('adiós')) {
    return '¡Hasta luego! Si necesitas algo más, aquí estaré.';
  } else {
    return 'Lo siento, no entiendo. ¿Puedes ser más específico?';
  }
}
