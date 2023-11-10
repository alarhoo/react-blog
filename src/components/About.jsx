import React from 'react';

import { Container, Figure, Spinner, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
const About = () => {
  return (
    <div>
      <Container>
        <Figure>
          <Figure.Image width={800} height={450} alt="random.imagecdn.app" src="https://random.imagecdn.app/800/450" />
          <Figure.Caption>Nulla vitae elit libero, a pharetra augue mollis interdum.</Figure.Caption>
        </Figure>
        <br />
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
        <Dropdown as={ButtonGroup}>
          <Button variant="success">Split Button</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </div>
  );
};

export default About;
