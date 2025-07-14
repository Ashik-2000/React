import { useState } from "react";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import Posts from "./components/Posts.jsx";
import initialPosts from "./data/db.js";

function App() {
    const [posts, setPosts] = useState(initialPosts);
    const [post, setPost] = useState(null);

    const handleAddPost = (newPost) => {
        const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
        setPosts([
            ...posts,
            {
                id,
                ...newPost,
            },
        ]);
    };

    const handleDeletePost = (postId) => {
        if (confirm("Are you sure you want to delete the post?")) {
            const newPosts = posts.filter((post) => post.id !== postId);
            setPosts(newPosts);
        } else {
            console.log("You chose not to delete the post!");
        }
    };

    const handleEditPost = (updatedPost) => {
        const updatedPosts = posts.map((post) => {
            post.id === updatedPost.id ? updatedPost : post;
        });
        setPosts(updatedPosts);
    };

    return (
        <div>
            <div>
                <h1>API request with AXIOS</h1>
                <hr />
                <div>
                    <Posts
                        posts={posts}
                        onDeletePost={handleDeletePost}
                        onEditClick={setPost}
                    />
                    <hr />
                    {!post ? (
                        <AddPost onAddPost={handleAddPost} />
                    ) : (
                        <EditPost post={post} onEditPost={handleEditPost} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
