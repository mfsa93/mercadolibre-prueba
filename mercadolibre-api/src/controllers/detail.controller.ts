import axios from "axios";
import { environment } from "../env";
import Category from "./category.controller";
import  {Response} from 'express';
import { Item } from "../interfaces/item.interface";

export default class Detail extends Category {

    async detail(res: Response, id: string) {

        try{

            const item = await axios.get(environment.endpoints.item.replace(':id', id))
            const itemDescription =  await axios.get(environment.endpoints.itemDescription.replace(':id', id))

            if( !item.data ) {
                return this.errors.default(res, environment.errors.detail);
            }

            const category = await this.getCategory(item.data.category_id)

            res.status(200).json({
                author: environment.author,
                categories: this.getCategoriesBreadCrumb(category.data.path_from_root),
                item: this.getItem(item, itemDescription)
            });
            
        } catch(error) {
            this.errors.default(res, error);
        }
       
    }

    private getItem(item: any, itemDescription: any) {
        return {
            id: item.data.id,
            title: item.data.title,
            price: {
                currency: item.data.currency_id,
                amount: item.data.price,
                decimals: 0
            },
            picture: item.data.thumbnail,
            condition: item.data.condition,
            free_shipping: item.data.shipping.free_shipping,
            description: itemDescription.data.plain_text
        } as Item
    }

}