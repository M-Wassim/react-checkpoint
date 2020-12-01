import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Jumbo.css'

const Example = (props) => {
  return (
    <div >
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-1 font-weight-normal ">Want To Join Us</h1>
          <p className="lead font-weight-normal">Please Fill In The Form Below</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;