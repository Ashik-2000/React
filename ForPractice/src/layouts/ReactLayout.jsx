import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ReactLayouts() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
