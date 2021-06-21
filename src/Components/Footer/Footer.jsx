import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return(
        <footer id="page-footer" className="uk-margin-top" uk-sticky="true">
            <div className="uk-container">
                <p className="uk-text-small">DJaponES por <a href="https://github.com/joeperpetua" className="uk-text-small" rel="noreferrer" target="_blank">Joel Perpetua</a></p>
                <Link to="/about" className="uk-text-small">Ver atribuciones de licencia</Link>
            </div>
        </footer>
    );
}

export default Footer;