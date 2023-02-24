import { useParams } from "react-router-dom";
import storeItems from '../data/storeItems';

export default function Item() {
    const { id } = useParams()
    console.log(storeItems[id])
    return(
        <>
            <h1>Item {id}</h1>
            <p>{JSON.stringify(storeItems[id])}</p>
        </>
    )
}