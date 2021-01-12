import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../Breadcrumb'


export default function SearchResults (props: any) {
    const { t } = useTranslation();
    return (
        <div className="results-container">
            <Breadcrumb categories={props.result.categories}/>
            <div className="items">
                {
                    props.result.items?.length ? 
                    props.result.items.map( (item: any) => (
                        <div className="item" key={item.id}>

                            <div className="item-image">
                                <Link to={`/items/${item.id}`}><img src={item.picture} alt={item.title}/></Link>
                            </div>
                            <div className="item-information">
                                <div className="item-price">{item.price.currency} {item.price.amount}</div>
                                <Link to={`/items/${item.id}`}><h2 className="item-name">{item.title}</h2></Link>
                                <div className="item-condition">{ t(item.condition)}</div>
                            </div>
                            
                        </div>
                    ))
                    : null
                }
            </div>
        </div>
    )
}