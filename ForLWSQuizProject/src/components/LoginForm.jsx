import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }
    }
    return (
        <>
            <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
                <TextInput
                    type="email"
                    placeholder="Enter Email"
                    icon="alternate_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextInput
                    type="password"
                    placeholder="Enter Password"
                    icon="lock"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button disabled={loading} type="submit">
                    <span>Submit now</span>
                </Button>

                {error && <p className="error">{error}</p>}

                <div className="info">
                    Don't have an account?
                    <Link to="/signup"> Signup</Link> instead.
                </div>
            </Form>
        </>
    );
}
