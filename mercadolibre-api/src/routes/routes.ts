import { Application } from "express";
import { item, search } from "../controllers/app.controller";

export class Routes {
    constructor(private app: Application) {
        this.init();
    }

    private init() {
        this.app.get('/api/items', search);
        this.app.get('/api/items/:id', item)
    }

}