import express, { Application } from "express";
import { Routes } from "./routes/routes";
import cors from 'cors';
import * as bodyParser from 'body-parser';

export class App {

    private PORT: number | string = process.env.PORT || 4000;
    private app: Application;
    constructor() {
        this.app = express();
        this.middlewares();
        this.initRoutes();
    }

    private initRoutes() {
        new Routes(this.app);
    }

    private middlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    public listen(){
        this.app.listen(this.PORT, () => console.log(`Server listening on port ${this.PORT}`))
    }
}