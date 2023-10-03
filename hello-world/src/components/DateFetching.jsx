import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initailState = {
  post: {},
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        post: {},
        loading: false,
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

const DateFetching = () => {
  const [state, dispatch] = useReducer(reducer, initailState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // setLoading(false);
        // setPost(response.data);
        // setError("");
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        // setLoading(false);
        // setPost({});
        // setError(error.message);
        dispatch({ type: "FETCH_ERROR", payload: {} });
      });
  }, []);

  return (
    <div>
      {state.loading ? <p>Loading...</p> : <p></p>}
      {state.error ? <p>Someting went wrong</p> : <p>{state.post.title}</p>}
    </div>
  );
};

export default DateFetching;