var socket = io();

socket.on('connect',function () {
	console.log('User Connected via socket.io');
});