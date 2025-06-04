import { useState } from "react";

const initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
];

export default function List() {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState(initialArtists);
    const [id, setID] = useState(3);
    const [target, setTarget] = useState(0);

    const handleClick = () => {

        const newArtists = [
            ...artists.slice(0, target-1),
            { id: id, name: name },
            ...artists.slice(target-1),
        ];
        setArtists(newArtists);
        setName("");
        setID(id + 1);
        console.log(target);
    };

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <h2>Input Target</h2>
            <input value={target} onChange={(e) => setTarget(e.target.value)} />
            <br />
            <br />
            <button onClick={handleClick}>Insert</button>
            <ul>
                {artists.map((artist) => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

// function handleClick() {
//     const insertAt = 1; // Could be any index
//     const nextArtists = [
//         // Items before the insertion point:
//         ...artists.slice(0, insertAt),
//         // New item:
//         { id: nextId++, name: name },
//         // Items after the insertion point:
//         ...artists.slice(insertAt),
//     ];
//     setArtists(nextArtists);
//     setName("");
// }
