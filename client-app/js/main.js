// this code runs in the browser!
const socket = new WebSocket('ws://localhost:8080')     // connect to websocket

console.log("Is this thing on?")                        // make sure script is loading properly.

// listen for messages from the server!
socket.onmessage = ({ data }) => {
    // print out any messages, along with the data sent by the server.
    console.log(`Message from the server: ${data}`);
}


// find the button in the HTML loading this script
document.querySelector('button').onclick = () => {
    // on button click, send "Hello world!" to server via websockets!
    socket.send("Hello world!");
}