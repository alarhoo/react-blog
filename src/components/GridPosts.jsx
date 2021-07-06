import React from "react";
import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "../config/axiosConfig";
import { Container, Row } from "react-bootstrap";

const GridPosts = () => {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    axios.get("/posts").then((response) => {
      console.log(response);
      if (response.status === 200) {
        setPostsData(response.data);
      }
    });
  }, []);

  return (
    <Container>
      <Row className="row-cols-3 row-cols-md-3 g-4">
        {postsData.map((post) => (
          // <p key={post.id}>ok</p>
          <Post key={post.id} post={post}></Post>
        ))}
      </Row>
    </Container>
  );
};

export default GridPosts;
