import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "./Button";
import Form from "./Form";
import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function SignupForm() {
    const { value } = useAuth();
    return (
        <>
            <Form style={{ height: "500px" }}>
                <TextInput type="text" placeholder="Enter Name" icon="person" />
                <TextInput
                    type="text"
                    placeholder="Enter Email"
                    icon="alternate_email"
                />
                <TextInput
                    type="password"
                    placeholder="Enter Password"
                    icon="lock"
                />
                <TextInput
                    type="password"
                    placeholder="Confirm Password"
                    icon="lock"
                />
                <CheckBox
                    type="checkbox"
                    text="I agree to the Terms &amp; Condidtions"
                />
                <Button>
                    <span>Submit now</span>
                </Button>
                <div className="info">
                    Already have an account?
                    <a href="login.html">
                        {" "}
                        <Link to="/login">Login</Link>
                    </a>{" "}
                    instead.
                </div>
            </Form>
        </>
    );
}
