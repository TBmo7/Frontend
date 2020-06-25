import React from 'react';
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import OrderForm from './InfoForm.js';

const App = () => {
  return (
    <>
      {/* the header used inline styling just for now */}
      <Navbar color='info'>
        <h1 style={{ color: 'white' }}>MedCabinet</h1>
        <Link to={'/'}>
          {/* added the home button */}
          <Button color='info'>Home</Button>
        </Link>
        <Link to={'/info'}>
          {/* added the home button */}
          <Button color='info'>Strain</Button>
        </Link>
      </Navbar>

      <Route exact path='/'>
        {/* importing the image */}
        <Card>
          <CardImg src={require('./Img/bg.jpg')} />
          <Link to={'/info'}>
            {/* <Button
              color='info'
              style={{ position: 'absolute', left: '50%', top: '50%' }}
            >
              info
            </Button> */}
          </Link>
          {/* added the info button */}
        </Card>
      </Route>

      {/* added the OrderForm to order taco */}
      <Route path='/info'>
        <OrderForm />
      </Route>
    </>
  );
};
export default App;
//--------------------------------------------------------------------------------------------
//
//
//-------------------------------------------------------------------------------------------
