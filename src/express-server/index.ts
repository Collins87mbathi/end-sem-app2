import { createServer } from "http";
import { Application } from "express";


export default ({ app }: { app: Application }) => {
    const server = createServer(app);
    process.on('unhandledRejection', (reason, p) => {
        console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
        // application specific logging, throwing an error, or other logic here
    })
    process.on('uncaughtException', err => {
        console.log('Uncaught Exception thrown');
        console.log(err.message);
        // application specific logging, throwing an error, or other logic here
    })
    process.on('uncaughtRejection', err => {
        console.log('Uncaught Rejection thrown');
        console.log(err.message);
        // application specific logging, throwing an error, or other logic here
    })
    return server;
}