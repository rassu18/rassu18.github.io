import React from "react";
import axios from "axios";

function FirstComponent() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li className="post" key={post.id}>
          <h4>{post.title}</h4>
          <h2>{post.id}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default FirstComponent;