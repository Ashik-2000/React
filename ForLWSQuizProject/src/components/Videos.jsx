import classes from "../styles/Videos.module.css";
import Video from "./Video";
import { Link } from "react-router";
import useVideoList from "../../hooks/useVideoList";
import { useState } from "react";

export default function Videos() {
    const { loading, error, videos, hasMore } = useVideoList(0);
    const [page, setPage] = useState(1);
    return (
        <div className={classes.videos}>
            {videos.length > 0 &&
                videos.map((video) => (
                    <Link to="/quiz" key={video.youtubeID}>
                        <Video
                            title={video.title}
                            id={video.youtubeID}
                            noq={video.noq}
                        />
                    </Link>
                ))}
            {!loading && videos.length === 0 && <div>No data found !</div>}
            {error && <div>There was an error !</div>}
            {loading && <div>Loading....</div>}
        </div>
    );
}
