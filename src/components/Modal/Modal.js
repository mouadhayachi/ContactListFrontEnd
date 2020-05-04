import React, { useState } from "react";
import axios from "axios";

import { Modal, Button } from "react-bootstrap";
import "./Modal.css";

function ModalForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(props.user ? props.user.name : "");
  const [email, setEmail] = useState(props.user ? props.user.email : "");
  const [phone, setPhone] = useState(props.user ? props.user.phone : "");

  const add = () => {
    axios
      .post("http://localhost:4000/", { name, email, phone })
      .then(() => setName(""), setEmail(""), setPhone())
      .catch((err) => console.error(err));
    handleClose();
  };

  const update = () => {
    axios
      .put(`http://localhost:4000/${props.user._id}`, { name, email, phone })
      .then((res) => console.log("Contact was updated with success"))
      .catch((err) => console.error(err));
    handleClose();
  };

  return (
    <React.Fragment>
      <Button
        variant="primary"
        onClick={handleShow}
        className={
          props.user ? "btn btn-success btn-update" : "btn btn-primary"
        }
      >
        {props.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <input
            type="text"
            placeholder="Type your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Type your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            placeholder="Type your phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.user ? update() : add();
            }}
          >
            {props.name === "Update" ? "Update" : "Add Contact"}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ModalForm;
