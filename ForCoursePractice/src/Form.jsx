import { useState } from "react";

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() === "dhaka") {
                resolve();
            } else {
                reject(new Error("Good guess but a wrong answer. Try again!"));
            }
        }, 1500);
    });
}

export default function Form() {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(""); // "typing", "submitting" or "success"

    const handleTyping = (e) => {
        setAnswer(e.target.value);
        setStatus("typing");
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        } catch (error) {
            setStatus("typing");
            setError(error);
        }
    };

    if (status === "success") {
        return <h1>That's right!</h1>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <textarea
                value={answer}
                onChange={handleTyping}
                disabled={status === "submitting"}
            />
            <br />
            <button disabled={answer === "" || status === "submitting"}>
                Submit
            </button>
            {error && <p className="Error">{error.message}</p>}
        </form>
    );
}
