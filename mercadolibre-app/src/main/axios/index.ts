import axios from "axios";
import { Observable, Subject } from "rxjs";
import { environment } from "../../env";

const itemsSubject = new Subject();
export const items: Observable<any> = itemsSubject.asObservable();

const producDetailSubject = new Subject();
export const product: Observable<any> = producDetailSubject.asObservable();

export const search = async( searchTerm: string ) => {
    // itemsSubject.next(searchTerm)
    axios.get( `${environment.api}?q=${searchTerm}`, {} )
    .then( (response: any) => {
        itemsSubject.next(response.data);
    });
}

export const productDetail = async( itemId: string): Promise<any>  => {
    axios.get(`${environment.api}/${itemId}`).then( (response: any) => {
        producDetailSubject.next(response.data);
    });
}