import React from "react";

import { Form, Col, Row, Button, Card } from "react-bootstrap";

import "./style.css";

export default function RegPage() {
  return (
    <div className="regpage">
      <Card>
        <Card.Body>
          <Card.Title>Registration Form</Card.Title>
          <Form className="form">
            <Row>
              <Form.Label column lg={3}>
                Full Name
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Full Name" />
              </Col>
            </Row>
            <Row>
              <Form.Label column lg={3}>
                User Name
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="User Name" />
              </Col>
            </Row>
            <Row>
              <Form.Label column lg={3}>
                Password
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Password" />
              </Col>
            </Row>
            <Row>
              <Form.Label column lg={3}>
                Telephone Number
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Telephone Number" />
              </Col>
            </Row>

            <div className="form-flex-btn">
              <Button>Submit</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
