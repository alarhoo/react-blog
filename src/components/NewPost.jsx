// @ts-nocheck
import { useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';
import axios from '../config/axiosConfig';
import { useHistory } from 'react-router-dom';

const NewPost = () => {
  // maintaing newPost state
  const [newPostData, setNewPostData] = useState({
    title: '',
    body: '',
  });
  const history = useHistory();

  function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log(newPostData);
    const options = {
      url: '/posts',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      data: newPostData,
    };

    axios(options)
      .then((res) => {
        console.log(res.data);
        alert(`${res.status} - ${res.statusText}`);
        history.push(`/posts/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card className="mt-4" style={{ width: '750px' }}>
        <Card.Header>
          <Card.Title>Add New Post</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Post Title
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={newPostData.title}
                  onChange={(e) => {
                    setNewPostData({ ...newPostData, title: e.target.value });
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Post Body
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  placeholder="Body"
                  value={newPostData.body}
                  onChange={(e) => {
                    setNewPostData({ ...newPostData, body: e.target.value });
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewPost;
