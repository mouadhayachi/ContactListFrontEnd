import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Button } from "react-bootstrap";
import "./AddContact.css";

function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(
        `http://localhost:4000/${props.match.params.id}`
      );
      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
    }
    getUser();
  }, [props.match.params.id]);

  const add = () => {
    axios
      .post("http://localhost:4000/", { name, email, phone })
      .then(() => setName(""), setEmail(""), setPhone())
      .catch((err) => console.error(err));
  };

  const update = () => {
    axios
      .put(`http://localhost:4000/${props.match.params.id}`, {
        name,
        email,
        phone,
      })
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
            props.match.params.id ? update() : add();
          }}
        >
          {props.match.params.id ? "Update" : "Add Contact"}
        </Button>
      </Link>
    </div>
  );
}
export default AddContact;
