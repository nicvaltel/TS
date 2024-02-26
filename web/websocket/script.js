// Get references to HTML elements
var outputElement = document.getElementById('output');
// Create a WebSocket connection
var socket = new WebSocket('ws://localhost:1234'); // Change the URL to your WebSocket server address
// Event handler when the connection is established
socket.addEventListener('open', function (event) {
    outputElement.innerHTML += '<p>Connected to WebSocket server.</p>';
});
// Event handler for messages received from the server
socket.addEventListener('message', function (event) {
    var message = event.data;
    outputElement.innerHTML += "<p>Received: ".concat(message, "</p>");
});
// Event handler for connection errors
socket.addEventListener('error', function (event) {
    outputElement.innerHTML += '<p>Error: Unable to connect to WebSocket server.</p>';
});
// Event handler when the connection is closed
socket.addEventListener('close', function (event) {
    outputElement.innerHTML += '<p>Connection closed.</p>';
});
// Function to send a message to the server
function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
        outputElement.innerHTML += "<p>Sent: ".concat(message, "</p>");
    }
    else {
        outputElement.innerHTML += '<p>Error: WebSocket connection is not open.</p>';
    }
}
// Example: Send a message when the button is clicked
var sendButton = document.createElement('button');
sendButton.textContent = 'Send Message';
sendButton.addEventListener('click', function () {
    var message = prompt('Enter a message:');
    if (message) {
        sendMessage(message);
    }
});
document.body.appendChild(sendButton);
