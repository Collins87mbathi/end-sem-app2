import { Server } from 'socket.io';
import { createServer } from 'http';

type ServerType = ReturnType<typeof createServer>

export default ({ server }: { server: ServerType }) => {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    })
    return server;
}