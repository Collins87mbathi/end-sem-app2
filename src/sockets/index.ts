import { Server } from 'socket.io';
import { createServer } from 'http';
import { instrument } from '@socket.io/admin-ui';
import { socketEvents } from '../constants/appEvents';

type ServerType = ReturnType<typeof createServer>;

export default ({ server }: { server: ServerType }) => {
	const io = new Server(server


	);
	instrument(io, {
		auth: false,
		namespaceName:'admin'
	});

	io.on(socketEvents.connection, (socket) => {
		console.log('New client connected');
		socket.emit('message', 'Welcome to the chat app');
		socket.on(socketEvents.disconnect, () => {
			console.log('Client disconnected');
		});
	});

	return server;
};
