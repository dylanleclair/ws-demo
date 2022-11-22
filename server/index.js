const WebSocket = require('ws');                        // import websockets

const server = new WebSocket.Server({ port: '8080' })   // start websocket server

server.on('connection', socket => {                     // when a user connects to the websocket


    // bind the following 'message' to the websocket
    socket.on('message', message => {                   // when a client sends data to websocket
        socket.send(`Roger that! ${message}`);          // reply with a message, echoing their message
    });
});

