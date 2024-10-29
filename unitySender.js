const WebSocket = require('ws');

const socket = new WebSocket('wss://serverB.com/socket');

socket.on('open', () => {
    const message = { message: 'Hello from Server A!' };
    socket.send(JSON.stringify(message));
    console.log('Message sent to Server B:', message);
});

