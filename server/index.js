import {WebSocketServer} from 'ws'

const server = new WebSocketServer({port: 8080}, () => console.log('Server started'))

const users = new Set();

function sendMessage(message) {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

server.on('connection', (ws) => {
    const userRef = {ws}
    users.add(userRef)
    ws.on('message', (message) => {
        console.log(message);
        try {
            const data = JSON.parse(message);
            if(typeof data.sender !== 'string' || typeof data.body !== 'string'){
                console.error('Invalid message');
                return
            }

            const messageToSend = {
                sender: data.sender,
                body: data.body,
                sendAt: Date.now()
            }

            sendMessage(messageToSend)
        } catch(e) {
            console.error('Error parsing message', e)
        }
    });
    ws.on('close', (code, reason) => {
        users.delete(userRef);
        console.log(`Connection closed: ${code} ${reason}!`);
    })
});