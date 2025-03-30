import Illustration from "../Illustration";
import loginImage from "../../assets/login.svg";
import LoginForm from "../LoginForm";

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={loginImage} />
                <LoginForm />
            </div>
        </>
    );
}
