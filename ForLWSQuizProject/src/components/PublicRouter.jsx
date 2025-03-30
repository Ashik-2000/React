// this component is used to check if the user is logged in or not, If logged in then it won't let you access the signup page.
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router";

export default function PublicRouter({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return !currentUser ? <Component {...rest} /> : <Navigate to="/" />;
}
