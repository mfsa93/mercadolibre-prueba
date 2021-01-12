import { Author } from "./author.interface";
import { Item } from "./item.interface";




export interface SearchResults {
    author: Author,
    categories: string[],
    items: Item[]
}