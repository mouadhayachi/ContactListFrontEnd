import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Button } from "react-bootstrap";
import "./AddContact.css";

function AddContact(props) {
  const [name, setName] = useState(props.user ? props.user.name : "");
  const [email, setEmail] = useState(props.user ? props.user.email : "");
  const [phone, setPhone] = useState(props.user ? props.user.phone : "");

  const add = () => {
    axios
      .post("http://localhost:4000/", { name, email, phone })
      .then(() => setName(""), setEmail(""), setPhone())
      .catch((err) => console.error(err));
  };

  const update = () => {
    axios
      .put(`http://localhost:4000/${props.user._id}`, { name, email, phone })
      .then((res) => console.log("Contact was updated with success"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="addcontact-container">
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        className="input-user"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Type your email"
        value={email}
        className="input-user"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Type your phone number"
        value={phone}
        className="input-user"
        onChange={(event) => setPhone(event.target.value)}
      />
      <Link to="/contactlist">
        <Button
          variant="primary"
          className="btn-action"
          onClick={() => {
            props.user ? update() : add();
          }}
        >
          {props.name === "Update" ? "Update" : "Add Contact"}
        </Button>
      </Link>
    </div>
  );
}
export default AddContact;
