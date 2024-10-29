// serverB.js (Server-Side)
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Listen for incoming messages
    ws.on('message', (message) => {
        console.log('Received from Client A:', message);
        // You can send a response back to the client if needed
        ws.send('Hello from Server B!');
    });

    // Handle disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('Server B is running on ws://your-server-url.com:8080'); // Ensure this is accessible from the client
