import React, { useContext } from "react";
import Post from "./Post";
import AddPost from "./AddPost";
import { PostsContext } from "../providers/PostsProvider";

const Posts = () => {
  const posts = useContext(PostsContext);

  return (
    <section className="Posts">
      <AddPost />
      <h1 style={{ textAlign: "center" }}>All Posts</h1>

      {posts.length > 0 ? (
        posts.map((post) => <Post {...post} key={post.id} />)
      ) : (
        <p style={{ textAlign: "center" }}>There is no post to display.</p>
      )}
    </section>
  );
};

export default Posts;
