import Navbar from "./Nav";
import classes from "../styles/Layout.module.css";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={classes.main}>
                <div className={classes.container}>{children}</div>
            </main>
        </>
    );
}