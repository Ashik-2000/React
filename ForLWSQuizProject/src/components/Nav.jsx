import Account from "./Accounrt";
import classes from "../styles/Nav.module.css";
import logo from "../assets/logo-bg.png";
import { NavLink, Link } from "react-router";

export default function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}
