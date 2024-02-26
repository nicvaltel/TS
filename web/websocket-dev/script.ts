// Get references to HTML elements
const outputElement = document.getElementById('output') as HTMLDivElement;

// Create a WebSocket connection
const socket = new WebSocket('ws://localhost:1234'); // Change the URL to your WebSocket server address

// Event handler when the connection is established
socket.addEventListener('open', (event) => {
    outputElement.innerHTML += '<p>Connected to WebSocket server.</p>';
});

// Event handler for messages received from the server
socket.addEventListener('message', (event) => {
    const message = event.data;
    outputElement.innerHTML += `<p>Received: ${message}</p>`;
});

// Event handler for connection errors
socket.addEventListener('error', (event) => {
    outputElement.innerHTML += '<p>Error: Unable to connect to WebSocket server.</p>';
});

// Event handler when the connection is closed
socket.addEventListener('close', (event) => {
    outputElement.innerHTML += '<p>Connection closed.</p>';
});

// Function to send a message to the server
function sendMessage(message: string) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
        outputElement.innerHTML += `<p>Sent: ${message}</p>`;
    } else {
        outputElement.innerHTML += '<p>Error: WebSocket connection is not open.</p>';
    }
}

// Example: Send a message when the button is clicked
const sendButton = document.createElement('button');
sendButton.textContent = 'Send Message';
sendButton.addEventListener('click', () => {
    const message = prompt('Enter a message:');
    if (message) {
        sendMessage(message);
    }
});
document.body.appendChild(sendButton);
