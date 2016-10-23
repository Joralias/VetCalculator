import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import { Jumbotron} from 'react-bootstrap';



class AboutPage extends Component {


  render() {
    const jumboStyle=  {
      color: '#9d9d9d', //grey
      backgroundColor: 'black',
      padding: '2em',
      textAlign: 'center',
};


    return (

      <container>
        <div>
          <Navigation title="Home" displayDropdown={false}/>
        </div>
        <div>
          <Jumbotron style={jumboStyle}>
            <h1>Dosis Calculator for Vets</h1>
            <p>App developed by OjeteStudios</p>
            <p>Any query send an email to:</p>
            <p>info@OjeteStudios.com</p>
          </Jumbotron>
        </div>
      </container>
    );
  }
}

export default AboutPage;
