import axios from "axios";
import { environment } from "../env";
import Errors from "./error.controller";

export default class Category {

    endpoint = environment.endpoints.categories
    protected errors = new Errors();

    getCategoriesBreadCrumb( categories: any[] ): string[] {
        if(!categories) {
            return [];
        }
        return categories.map( (category: any) => {
            return category.name
        });
    }

    async getCategory(id: string) {
        return axios.get(this.endpoint.replace(':id', id));
    }

}