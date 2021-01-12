import { Price } from "./price.interface";

export interface Item{
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean,
    description?: string
}