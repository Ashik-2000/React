import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <div>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/document">
                    <li>Document</li>
                </Link>
                <Link to="/news">
                    <li>News</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </div>
        </>
    );
}
