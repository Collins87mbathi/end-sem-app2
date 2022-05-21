import express, { Application } from "express";
import { join } from 'path';
import morgan from 'morgan';
import helmet from "helmet";
import cors from "cors";
import { BASE_DIR } from './../config'
import routes from "../routes";


export default ({ app }: { app: Application }) => {
    app.use(express.json({ limit: '100mb' }))
    app.use(express.static(join(BASE_DIR, 'src/public')));
    app.use(express.urlencoded({ extended: true }))
    app.use(morgan('dev'));
    app.use(helmet())
    app.set('trust proxy', 1)
    app.set('view engine', 'ejs');
    app.set('views', join(BASE_DIR, 'src/views'));
    app.set('view options', { layout: false });
    app.set('x-powered-by', false);
    app.set('json spaces', 4);
    app.use(cors({
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:3002',
            'http://localhost:3003',
            'http://localhost:3004',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        credentials: true

    }))
    routes({ app })

    app.all('*', (req, res, next) => {
        return res.status(404).json({
            status: 404,
            message: 'Not Found',
            data: {
                params: req.params,
                body: req.body,
                url: req.url
            }
        })
    });

    return app;
}