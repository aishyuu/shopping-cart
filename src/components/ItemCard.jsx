import { Link } from "react-router-dom"

export default function ItemCard({item}) {
    console.log(item)
    return(
        <div className="itemCardContainer">
            <Link to={`/store/${item.id}`} className="itemCardImage">
                <img src={item.images[0]} alt={item.name} />
            </Link>
            <div className="itemCardInfo">
                <Link className="itemLink" to={`/store/${item.id}`}>{item.name}</Link>
                {item.on_sale ? 
                    <div className="itemOnSale">
                        <p className="saleOriginalPrice">${item.stock_price}</p>
                        <h1 className="saleNewPrice">${item.sale_price}</h1>
                    </div>
                : <h1>${item.sale_price}</h1>}
                <p>{item.description}</p>
            </div>
        </div>
    )
}