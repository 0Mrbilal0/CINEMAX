import { Link } from "react-router-dom"
import cinemaxLogo from "../assets/cinemax-lg.png";

export default function Navbar() {

    return (
        <>
            <nav role="navigation">
                <Link to={'/'}>
                    <img src={cinemaxLogo} width={150} alt="cinemax Logo" />
                </Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/'>Recherche</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/fav'>Mes favoris</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}