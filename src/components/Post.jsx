// @ts-nocheck
import React from "react";

import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Col className="mt-3">
      <Card>
        <Card.Header style={{ display: "flex" }}>
          <img
            alt="profile_pic"
            className="rounded-circle article-img mr-3"
            src={`https://picsum.photos/seed/${post.id}/80/80`}
          />
          <div>
            <Link to={`/posts/${post.id}`}>
              <Card.Title>{post.title.substr(0, 20)}</Card.Title>
            </Link>
            <Card.Subtitle className="mb-2 text-muted">
              {post.title.substr(0, 15)}
            </Card.Subtitle>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="dotlines">{post.body}</Card.Text>

          <Link to={`/posts/${post.id}`}>
            <Card.Text>Read More...</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
