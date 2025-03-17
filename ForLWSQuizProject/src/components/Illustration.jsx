import signImage from "../assets/signup.svg";
import classes from "../styles/Illustration.module.css";

export default function Illustration() {
    return (
        <div className={classes.Illustration}>
            <img src={signImage} alt="Signup" />
        </div>
    );
}
