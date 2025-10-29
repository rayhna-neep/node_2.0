import React from "react";
import { Card } from "react-bootstrap";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";

function MyCard() {
  return (
    <Card
      style={{
        width: "20rem",
        backgroundColor: "#e9bae9ff", 
        color: "white",             
      }}
      className="shadow mb-3 text-center"
    >
      <Card.Body>
        <Image />
        <Card.Title className="mt-3">
          <Name />
        </Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
        <h5 className="text-light">
          <Price />
        </h5>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
