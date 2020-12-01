import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';

import img1 from '../img/rom.jpg'
import img2 from '../img/rom2.jpg'
import img3 from '../img/rom3.jpg'

const Example = (props) => {
  return (
    <CardColumns>
      <Card>
        <CardImg top width="100%" src = {img1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button color="info" >Visit</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src = {img2} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button color="info">Visit</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src = {img3} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button color="info">Visit</Button>
        </CardBody>
      </Card>
     
      
    </CardColumns>
  );
};

export default Example;