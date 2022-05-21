import { createServer } from 'http';
import sockets from './../sockets'
export default ({ server }: { server: ReturnType<typeof createServer> }) => {
    const io = sockets({ server })

    return io

}