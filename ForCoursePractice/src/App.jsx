import { useState } from "react";

let initialCounters = [0, 0, 0];

export default function CounterList() {
    const [counters, setCounters] = useState(initialCounters);

    const handleIncrement = (index) => {
        const newCounters = counters.map((c, i) => {
            if (i == index) {
                return c + 1;
            } else {
                return c;
            }
        });
        setCounters(newCounters);
    };

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter + "    "}{" "}
                    <button onClick={() => handleIncrement(i)}>+1</button>
                </li>
            ))}
        </ul>
    );
}

// function handleIncrementClick(index) {
//     const nextCounters = counters.map((c, i) => {
//         if (i === index) {
//             // Increment the clicked counter
//             return c + 1;
//         } else {
//             // The rest haven't changed
//             return c;
//         }
//     });
//     setCounters(nextCounters);
// }
