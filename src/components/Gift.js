import React, { Component } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

class Gift extends Component {
  constructor() {
    super();
    this.state = { person: "", present: "" };
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <h2>Person</h2>
            <FormControl
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <h2>Present</h2>
            <FormControl
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Gift;
