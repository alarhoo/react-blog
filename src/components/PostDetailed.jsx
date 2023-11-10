// @ts-nocheck
import React from 'react';
import axios from '../config/axiosConfig';
import { useEffect, useState } from 'react';
import { Container, Card, Button, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const PostDetailed = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', body: '' });
  useEffect(() => {
    axios.get(`/posts/${id}`).then((response) => {
      console.log(response.data, id);
      if (response.status === 200) {
        setPost(response.data);
      }
    });
  }, [id]);
  const history = useHistory();

  function handleDelete() {
    axios
      .delete(`/posts/${post.id}`)
      .then((res) => {
        alert(`${res.status} - ${res.statusText}`);
        history.push(`/`);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  function handleUpdate() {
    history.push(`/update/post/${post.id}`);
  }

  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center mt-3">
        <Card style={{ width: '50%' }}>
          <Card.Header style={{ display: 'flex' }}>
            <img
              style={{ marginRight: '10px' }}
              alt="profile_pic"
              className="rounded-circle article-img mr-3"
              src={`https://picsum.photos/seed/${post.id}/80/80`}
            />
            <div>
              <Card.Title>{post.title.substr(0, 20)}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{post.title.substr(0, 15)}</Card.Subtitle>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text className="dotlines">{post.body}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" size="sm" onClick={handleUpdate}>
              Update
            </Button>{' '}
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
};

export default PostDetailed;
