import React from 'react';
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import InfoForm from './InfoForm.js';

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
          {/* added the Strain button */}
          <Button color='info'>Strain</Button>
        </Link>
      </Navbar>

      <Route exact path='/'>
        {/* importing the image */}
        <Card>
          {/* inserted a picture of cannabis for header divider */}
          <CardImg src={require('./Img/bg.jpg')} />
          <Link to={'/info'} />
          {/* added the info button */}
        </Card>
      </Route>

      {/* added the path for info */}
      <Route path='/info'>
        <InfoForm />
      </Route>
    </>
  );
};
export default App;
//--------------------------------------------------------------------------------------------
//
//
//-------------------------------------------------------------------------------------------
