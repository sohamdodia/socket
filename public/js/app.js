var socket = io();

socket.on('connect',function () {
	console.log('User Connected via socket.io');
});

socket.on('message',function (message) {
	console.log('New message:');
	console.log(message.text);
});