import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [buttonClick, setButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("res: ", res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
    console.log("useEffect calls");
  }, [buttonClick]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <button onClick={()=>{setButtonClick(id)}} >Fech data</button>
      <p key={post.id}>{post.body}</p>
    </div>
  );
};

export default DataFetching;
