import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ContactList from "./components/ContactList/ContactList";
import AddContact from "./components/AddContact/AddContact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="home-page">
        <h1>Contact App</h1>
        <div>
          <Link to="/contactlist">
            <Button className="btn btn-warning btn-home">Contact List</Button>
          </Link>
          <Link to="/addcontact">
            <Button className="btn btn-primary btn-home">Add Contact</Button>
          </Link>
        </div>
      </div>
      <Route exact path="/addcontact" component={AddContact}></Route>
      <Route exact path="/contactlist" component={ContactList} />
    </Router>
  );
}
export default App;
