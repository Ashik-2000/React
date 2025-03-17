import Form from "../Form";
import Illustrations from "../Illustration";
import TextInput from "../TextInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import classes from "../../styles/Signup.module.css";

export default function Signup() {
    return (
        <>
            <h1>Craete an account</h1>
            <div className="column">
                <Illustrations />
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
                    <Button>Submit now</Button>
                    <div className="info">
                        Already have an account?
                        <a href="login.html"> Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
