import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form className="col-6 p-3 text-left bg-light mx-auto font-weight-bold">
    <FormGroup>
        <Label for="first" >First Name</Label>
        <Input type="text" name="first" id="frst" placeholder="" required/>
      </FormGroup>

      <FormGroup>
        <Label for="last">Last Name</Label>
        <Input type="text" name="last" id="last" placeholder="" required/>
      </FormGroup>

      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="" required/>
      </FormGroup>

      <FormGroup>
        <Label for="mail">Email</Label>
        <Input type="email" name="mail" id="mail" placeholder="" required />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder=""  required/>
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">How would you describe yourself ?</Label>
        <Input type="textarea" name="description" id="description" required />
      </FormGroup>

      <FormGroup>
        <Label for="exampleFile">Upload Photos</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          Please upload one or more photos you have taken in Tunisia
        </FormText>
        </FormGroup>
       <div className="mx-auto col-6 mt-5">
        <Button color="primary"  className="ml-5">Confirm</Button>
        <Button color="secondary"  className="ml-5">Cancel</Button>
        </div>

     
    </Form>
  );
}

export default Example;