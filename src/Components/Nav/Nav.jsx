import { Link } from "react-router-dom";
import logo from '../../res/logo-rec-light.png';
import './Nav.css';

function Nav() {
    return(
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
            <div className="uk-navbar-center">
                <div className="uk-navbar-center-left"><Link to="/about">Info</Link></div>
                <Link to="/" className="uk-navbar-item uk-logo"><img src={logo} alt="Logo"/></Link>
                <div className="uk-navbar-center-right"><Link to="/search">Buscar</Link></div>
            </div>
        </nav>
        
    );
}

export default Nav;