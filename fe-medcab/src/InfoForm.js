import React, { useState } from 'react';
import {
  Button,
  Card,
  CardImg,
  Form,
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
} from 'reactstrap';
import axios from 'axios';

const StrainForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Making the toggler change by seeting it to now state and previus state
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      {/* Making the header for the Taco order form */}
      <Card color='info'>
        <h2 style={{ color: 'white', margin: '0 auto' }}>
          Please Enter Your Information
        </h2>
        {/* Making the image container under the header */}
        <CardImg
          style={{ width: '100%', margin: '0 auto' }}
          src={require('./Img/Headerbg.png')}
        />
      </Card>

      {/* the form itself */}

      <Form style={{ margin: '5%' }}>
        {/* A name text input field */}
        {/* The FormGroup is used to section the page in to several */}
        <FormGroup>
          <legend>Name</legend>
          <Input type='name' name='name' />
        </FormGroup>

        {/* Dropdown form component for taco size (with a quantity #) */}
        <FormGroup>
          {/* This toggles between dropdown open and close */}
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            {/* This is what is displayed even when the dropdown is closed */}
            <DropdownToggle caret>
              Cannabis will be used to help with
            </DropdownToggle>
            {/* The actual dropdown */}
            <DropdownMenu>
              <DropdownItem>Stress</DropdownItem>
              <DropdownItem>Pain</DropdownItem>
              <DropdownItem>Nausea</DropdownItem>
              <DropdownItem>Insomnia</DropdownItem>
              <DropdownItem>Depression</DropdownItem>
              <DropdownItem>Loss of Appertite</DropdownItem>
              <DropdownItem>Muscle Spasms</DropdownItem>
              <DropdownItem>Seizures</DropdownItem>
              <DropdownItem>Fatigue</DropdownItem>
              <DropdownItem>Inflamination</DropdownItem>
              <DropdownItem>Spasticity</DropdownItem>
              <DropdownItem>Eye Pressure</DropdownItem>
              <DropdownItem>Cramps</DropdownItem>
              <DropdownItem>Headaches</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>

        {/* making the sauce selection radio button */}
        <legend>Desired Cannabis effect</legend>
        <FormGroup tag='fieldset'>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='effect' value='red' />
              Happy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='effect' value='green' />
              Euphoric
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='effect' value='chipotle' />
              Relaxed
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='effect' value='none' />
              Giggly
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='effect' value='red' />
              Creative
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='effect' value='green' />
              Uplifted
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='effect' value='chipotle' />
              Sleepy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='effect' value='none' />
              Energetic
            </Label>
          </FormGroup>
        </FormGroup>

        {/* making the toppping selection checkbox */}
        <legend>Continued with checkbox</legend>
        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='cilantro' checked={false} />
            Focused
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='onion' checked={false} />
            Talkative
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='avocado' checked={false} />
            Hungry
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='radish' checked={false} />
            Tingly
          </Label>
        </FormGroup>
        <FormGroup>
          <legend>Addition information</legend>
          <Input type='textarea' name='special' />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};
export default StrainForm;
