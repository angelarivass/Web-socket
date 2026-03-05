const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {

    socket.on('message', (data) => {

        if (!socket.nickname) {
            socket.nickname = data.nickname;

            io.emit('message', {
                nickname: "Sistema",
                text: `${socket.nickname} se conectó`
            });
        }

        io.emit('message', {
            nickname: data.nickname,
            text: data.text
        });

    });

    socket.on('disconnect', () => {

        if (socket.nickname) {
            io.emit('message', {
                nickname: "Sistema",
                text: `${socket.nickname} se desconectó`
            });
        }

    });

});

http.listen(8080, () => console.log('listening on http://localhost:8080'));