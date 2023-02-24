import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/store.css'
import storeItems from "../data/storeItems";
import ItemCard from "../components/ItemCard";

export default function Store() {
    console.log(storeItems);
    return(
        <div>
            <Header />
            <div className="storeContent">
                <h1>Content</h1>
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