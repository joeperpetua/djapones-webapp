import { Link } from "react-router-dom";
import logo from '../../res/logo-rec.png';
import './Nav.css';

function Nav() {
    return(
        // <div className='Nav'>
        //     <ul>
        //         <li><Link to="/about">About</Link></li>
        //         <li><Link to="/"><img src={logo} alt="Logo"/></Link></li>
        //         <li><Link to="/search">Search</Link></li>
        //     </ul>
        // </div>

        <div className="uk-navbar-container" uk-navbar="true">
            <div className="uk-navbar-center">
                <div className="uk-navbar-center-left"><Link to="/about">About</Link></div>
                <Link to="/" className="uk-navbar-item uk-logo"><img src={logo} alt="Logo"/></Link>
                <div className="uk-navbar-center-right"><Link to="/search">Search</Link></div>
            </div>
        </div>
        
    );
}

export default Nav;