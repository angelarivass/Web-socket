const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (data) => {
        console.log(data);

        io.emit('message', {
            nickname: data.nickname,
            text: data.text
        });
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080'));