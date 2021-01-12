import { NextFunction, Response, Request } from "express";
import Search from './search.controller'
import Errors from "./error.controller";
import Detail from "./detail.controller";

const searchController = new Search();
const detailController = new Detail();
const errors = new Errors();

export async function search( req: Request, res: Response, next: NextFunction ) {
    const term = req.query.q;
    if(!term) {
        return errors.default(res, {})
    }

    searchController.search(res, term.toString());
}

export async function item(req: Request, res: Response, next: NextFunction) {
    const itemID = req.params.id;
    if(!itemID) {
        return errors.default(res, {error: "ID Empty"});
    }

   detailController.detail(res, itemID)
    
}