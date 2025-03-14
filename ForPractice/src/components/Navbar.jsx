import { NavLink, useNavigate } from "react-router-dom";
import "../assets/navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/document">Document</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <button
                        onClick={() => navigate("/home", { replace: true })}
                    >
                        Back to home
                    </button>
                </ul>
            </nav>
        </>
    );
}
