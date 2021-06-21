import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return(
        <footer id="page-footer" class="uk-margin-top" uk-sticky>
            <div class="uk-container">
                <p class="uk-text-small">DJaponES por <a href="https://github.com/joeperpetua" class="uk-text-small" target="_blank">Joel Perpetua</a></p>
                <Link to="/about" class="uk-text-small">Ver atribuciones de licencia</Link>
            </div>
        </footer>
    );
}

export default Footer;