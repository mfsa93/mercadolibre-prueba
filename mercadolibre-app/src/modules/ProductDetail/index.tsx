import { useEffect } from "react"
import { useTranslation } from "react-i18next";
import { filter, map, takeLast } from "rxjs/operators"
import { product as ProductoObs } from "../../main/axios"
import { useProductDetail } from "../../main/hooks/productDetail"
import Breadcrumb from "../Breadcrumb";

export default function ProductDetail() {
    const {productDetail, setProductDetail} = useProductDetail();
    const { t } = useTranslation();
    useEffect(() => {
        const subs = ProductoObs.pipe(
            filter(response => response.item.id),
            map( response => {
                setProductDetail(response);
            }, 
            takeLast(1)
        )).subscribe()

        return () => {
            subs.unsubscribe();
        }
    }, [setProductDetail])

    return (
        <div className="container">
            {
                productDetail.item? 
                    <div className="product-detail-container">
                        <Breadcrumb categories={productDetail.categories}/>
                        <div className="product-detail">
                            <div className="product-image">
                                <img src={productDetail.item?.picture} alt={productDetail.item.title}/>
                            </div>
                            <div className="product-information">
                                <div className="condition">{ t(productDetail.item.condition) }</div>
                                <h2>{productDetail.item?.title}</h2>
                                <div className="price">{productDetail.item.price.currency} {productDetail.item.price.amount}</div>
                                <div className="buy-button-container">
                                    <button>Comprar</button>
                                </div>
                            </div>
                            <div className="product-description-container">
                                <div className="description-title">
                                    {t('productDetail.productDescription')}
                                </div>
                                <div className="product-description">
                                    {productDetail.item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                : null
            }
        </div>
    )
}
