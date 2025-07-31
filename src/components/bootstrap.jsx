import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BootstrapPage = () => {
  return (
    <div>
      <p>This is a Bootstrap Page</p>
      <Card className="col-12 lg=col-6">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Grilled Chicken</Card.Title>
          <Card.Text>99 Pesos</Card.Text>
          <Button variant="primary">View in AR Mode</Button>
          <Button variant="warning">Order Now </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BootstrapPage;
