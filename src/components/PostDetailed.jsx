// @ts-nocheck
import axios from '../config/axiosConfig';
import { useEffect, useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
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
        console.log(res.data);
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
    <Col className="mt-3">
      <Card>
        <Card.Header style={{ display: 'flex' }}>
          <img
            alt="profile_pic"
            className="rounded-circle article-img"
            src="https://picsum.photos/seed/picsum/200/300"
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
    </Col>
  );
};

export default PostDetailed;
