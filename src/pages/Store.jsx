import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/store.css'
import storeItems from "../data/storeItems";
import ItemCard from "../components/ItemCard";

export default function Store() {
    console.log(storeItems);
    return(
        <div className="storeContainer">
            <Header />
            <div className="storeContent">
                {storeItems.map(item => {
                    return(
                        <ItemCard key={item.id}
                            item={item}
                        />
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}