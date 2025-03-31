import { use, useEffect, useState } from "react";
import {
    get,
    getDatabase,
    orderByKey,
    query,
    ref,
} from "firebase/database";

export default function useVideoList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        async function fetchVideos() {
            // database related work
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videQuery = query(videosRef, orderByKey());
            try {
                setError(false);
                setLoading(true);
                // request firebase database
                const snapshot = await get(videQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((prevVideos) => {
                        return [
                            ...prevVideos,
                            ...Object.values(snapshot.val()),
                        ];
                    });
                } else {
                    //
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchVideos();
    }, []);
    return {
        loading,
        error,
        videos,
    };
}
