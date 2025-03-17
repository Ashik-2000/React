import Form from "../Form";
import Illustrations from "../Illustration";
import TextInput from "../TextInput";
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
                </Form>
            </div>
        </>
    );
}
