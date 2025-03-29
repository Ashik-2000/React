import SignupForm from "../SignupForm";
import Illustrations from "../Illustration";
import signImage from "../../assets/signup.svg";

export default function Signup() {
    return (
        <>
            <h1>Craete an account</h1>
            <div className="column">
                <Illustrations image={signImage} />
                <SignupForm />
            </div>
        </>
    );
}
