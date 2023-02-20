import '../styles/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="headerContainer">
            <div className="homeContainer">
                <h2><Link to={`/`} className="headerText">Sonus</Link></h2>
            </div>
            <div className="otherContainer">

            </div>
        </div>
    )
}