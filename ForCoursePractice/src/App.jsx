import { useState } from "react";
import ItemList from "./ItemList";

const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    function handleToggleMyList(artworkId, nextSeen) {
        const myNextList = myList.map((art) => {
            if (art.id == artworkId) {
                return {
                    ...art,
                    seen: nextSeen,
                };
            } else {
                return art;
            }
        });
        setMyList(myNextList);
    }

    function handleToggleYourList(artworkId, nextSeen) {
        const yourNextList = yourList.map((art) => {
            if (art.id == artworkId) {
                return {
                    ...art,
                    seen: nextSeen,
                };
            } else {
                return art;
            }
        });
        setYourList(yourNextList);
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={myList} onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList artworks={yourList} onToggle={handleToggleYourList} />
        </>
    );
}
