const sockets = io();

sockets.on('message', (data) => {
	console.log(data);
});
