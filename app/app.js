const socket = io('http://localhost:8080');

socket.on('message', data => {

    const el = document.createElement('li');
    el.innerHTML = `<strong>${data.nickname}:</strong> ${data.text}`;
    document.querySelector('#messages').appendChild(el);

});

document.querySelector('button').onclick = () => {

    const nickname = document.querySelector('#nickname').value;
    const text = document.querySelector('#message').value;

    socket.emit('message', {
        nickname: nickname,
        text: text
    });

};