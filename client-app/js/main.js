const socket = new WebSocket('ws://localhost:8080')

console.log("Is this thing on?")

// listen for messages
socket.onmessage = ({ data }) => {
    console.log(`Message from the server: ${data}`);
}

document.querySelector('button').onclick = () => {
    socket.send("Hello world!");
}