import axios from "axios";
import { environment } from "../env";
import  {response, Response} from 'express';
import Errors from "./error.controller";
import { SearchResults } from "../interfaces/searchResults.inteface";
import Category from "./category.controller";
import { Item } from "../interfaces/item.interface";

export default class Search extends Category {

    endpoint = environment.endpoints.search;
    errors = new Errors();

    search(res: Response, term: string ) {
        axios.get(this.endpoint.replace(':query', term.toString()))
        .then( (response: any) => {
            return res.status(200).json(this.formatResponse(response.data));
        }).catch( error => {
            return this.errors.default(res, error);
        })
    }

    formatResponse( response: any): SearchResults {
        return {
            author: environment.author,
            categories: this.getCategoriesBreadCrumb(response.filters[0]?.values[0].path_from_root),
            items: this.getItems(response.results),
        } as SearchResults;
    }

    getItems( items: any[] ) {
        if(!items) {
            return [];
        }
        return items.slice(0, 4).map( (item: any) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 0
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping
            } as Item
        });
    }

}