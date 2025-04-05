import { use, useEffect, useState } from "react";
import {
    get,
    getDatabase,
    limitToFirst,
    orderByKey,
    query,
    ref,
    startAt,
} from "firebase/database";

export default function useVideoList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        async function fetchVideos() {
            // database related work
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videQuery = query(
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            );
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
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchVideos();
    }, [page]);
    return {
        loading,
        error,
        videos,
        hasMore,
    };
}
