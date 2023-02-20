import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/store.css'

export default function Store() {
    return(
        <div>
            <Header />
            <div className="storeContent">
                <h1>Content</h1>
            </div>
            <Footer />
        </div>
    )
}