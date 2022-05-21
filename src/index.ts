import app from './app';
import chalk from 'chalk';
import expressServer from './express-server';
import socketServer from './socket-server';
// eslint-disable-next-line sort-imports
import { HOST, PORT, environment } from './config';
import moment from 'moment';

const server = socketServer({ server: expressServer({ app }) });

server.listen(process.env.PORT || 3000, () => {
	const message = JSON.stringify({
		message: 'Server is running',
		port: PORT,
		timestamp: moment(new Date().getTime()).format('LLLL'),
		HOST,
		environment,
	});
	console.log(chalk.yellow.bgHsv(0, 34, 6)(message));
}
);