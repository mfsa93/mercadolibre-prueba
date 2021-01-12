import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { productDetail as callProductDetail } from "./../axios";

export const useProductDetail = () => {
    const [productDetail, setProductDetail] = useState({} as any);
    let { id } = useParams() as any

    useEffect(() => {
        if(id) {
            callProductDetail(id);
        }
        return () => {
            id = undefined;
        }
    }, [id])

    return {productDetail, setProductDetail}
}