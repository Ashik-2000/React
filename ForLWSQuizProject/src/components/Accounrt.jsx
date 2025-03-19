import classes from "../styles/Accounts.module.css";
import { Link } from "react-router";

export default function Account() {
    return (
        <div class={classes.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
        </div>
    );
}
