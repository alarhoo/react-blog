// @ts-nocheck
import { useState, useEffect } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';
import axios from '../config/axiosConfig';
import { useHistory, useParams } from 'react-router-dom';

const UpdatePost = () => {
  // maintaing existing post state
  const [updatedPostData, setUpdatedPostData] = useState({
    title: '',
    body: '',
  });
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/posts/${id}`).then((response) => {
      console.log(response);
      if (response.status === 200) {
        setUpdatedPostData(response.data);
      }
    });
  }, [id]);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log(updatedPostData);
    const options = {
      url: `/posts/${id}`,
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      data: updatedPostData,
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
          <Card.Title>Update Post</Card.Title>
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
                  value={updatedPostData.title}
                  onChange={(e) => {
                    setUpdatedPostData({ ...updatedPostData, title: e.target.value });
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
                  value={updatedPostData.body}
                  onChange={(e) => {
                    setUpdatedPostData({ ...updatedPostData, body: e.target.value });
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

export default UpdatePost;
