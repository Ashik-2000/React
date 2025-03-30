// this component is used to check if the user is logged in or not, If not then it won't let you access the quiz and result page.
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router";

export default function PrivateRouter({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return currentUser ? <Component {...rest} /> : <Navigate to="/" />;
}
