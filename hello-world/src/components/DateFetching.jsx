import React, { useEffect, useState } from "react";
import axios from "axios";

const DateFetching = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setPost({});
        setError(error.message);
      });
  }, []);
  return (
    <div>
      {loading ? <p>Loading...</p> : <p></p>}
      {error ? <p>Someting went wrong</p> : <p>{post.title}</p>}
    </div>
  );
};

export default DateFetching;