import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";
import classes from "../../styles/Login.module.css";
import loginImage from "../../assets/login.svg";

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={loginImage} />
                <Form className={classes.login}>
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
                    <Button>
                        <span>Submit now</span>
                    </Button>
                    <div class="info">
                        Don't have an account?
                        <a href="signup.html"> Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
