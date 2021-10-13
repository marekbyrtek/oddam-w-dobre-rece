import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FourStepsButton = () => {
    return <Button as={Link} to="./oddaj-rzeczy" variant="outline-dark">ODDAJ<br />RZECZY</Button>
}

export default FourStepsButton;
