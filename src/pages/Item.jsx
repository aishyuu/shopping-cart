import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import storeItems from '../data/storeItems';
import '../styles/item.css'

export default function Item() {
    const { id } = useParams()
    const item = storeItems[id]
    return(
        <div className="itemPageContainer">
            <Header />
            <div className="itemContainer">
                <div className="returnContainer">
                    <Link className="returnLink" to="/store">
                        <div>
                            <p>Return to Store</p>
                        </div>
                    </Link>
                </div>
                <h1>Item {id}</h1>
                <div className="purchaseContainer">
                    <div className="imageContainer">
                        <img className="itemImage" src={item.images[0]} alt="" />
                    </div>
                    <div className="informationContainer">
                        <h1>{item.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}