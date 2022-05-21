import { Router } from "express";


const baseRouter = Router();

baseRouter.get('/', (req, res) => {
    res.render('index');
});


export { baseRouter };