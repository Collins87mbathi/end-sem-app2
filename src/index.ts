import socketServer from "./socket-server";
import expressServer from "./express-server";
import app from './app'
import moment from "moment";
import chalk from "chalk";
import { environment, HOST, PORT } from "./config";

const server = socketServer({ server: expressServer({ app }) });

server.listen(process.env.PORT || 3000, () => {
    const message = JSON.stringify({
        message: 'Server is running',
        port: PORT,
        timestamp: moment(new Date().getTime()).format('LLLL'),
        HOST,
        environment,
    })
    console.log(chalk.yellow.bgHsv(0, 34, 6)(message));
}
);