import { Application } from "express"
import { baseRouter } from "./base"

export default ({ app }: { app: Application }) => {

    app.use('/', baseRouter)
}