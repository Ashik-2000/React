export default function Posts({ posts, onDeletePost, onEditClick }) {
    return (
        <div>
            <h2>All Posts</h2>
            <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <span>{post.id}</span>
                            <span>{post.title}</span>
                            <span>
                                <a onClick={() => onDeletePost(post.id)}>
                                    ❌
                                </a>
                                <a onClick={() => onEditClick(post)}>
                                    ✏️
                                </a>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
