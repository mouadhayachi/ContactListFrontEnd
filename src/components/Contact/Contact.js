import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";
import "./Contact.css";

// import ModalForm from "./Modal";
// import "./Modal.css";

const Contact = (props) => {
  const deleteContact = (contactid) => {
    axios
      .delete(`http://localhost:4000/${contactid}`)
      .then(console.log("User was deleted"))
      .catch((err) => console.error(err));
  };

  return (
    <Card className="card-user">
      <Card.Body>
        <Card.Text>Name : {props.user.name}</Card.Text>
        <Card.Text>Email : {props.user.email}</Card.Text>
        <Card.Text>Phone : {props.user.phone}</Card.Text>
        <div className="btn-container">
          <Button
            className="btn btn-danger btn-update"
            onClick={() => deleteContact(props.user._id)}
          >
            Delete
          </Button>
          <Link to="/addcontact">
            <Button className="btn btn-success btn-update">Update</Button>
          </Link>
          {/* <ModalForm name="Update" user={props.user}/> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Contact;
