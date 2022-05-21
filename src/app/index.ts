import express from 'express';
import expressApp from './../express';

const app = express();

expressApp({ app });

export default app;
