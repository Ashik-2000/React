import Form from "../Form";
import Illustrations from "../Illustration";
import TextInput from "../TextInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import classes from "../../styles/Signup.module.css";
import signImage from "../../assets/signup.svg";

export default function Signup() {
    return (
        <>
            <h1>Craete an account</h1>
            <div className="column">
                <Illustrations image={signImage} />
                <Form className={`${classes.signup}`}>
                    <TextInput
                        type="text"
                        placeholder="Enter Name"
                        icon="person"
                    />
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
                        <a href="login.html"> Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
