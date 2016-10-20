import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import {Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


class SearchPage extends Component {


  render() {
    let componentList = ['Aspirina', 'Ibuprofeno','Paracetamol']

    const onSearch = () => {
        console.log( window.location.hash.substr(1))

  }


    return (
      <container>
        <div>
          <Navigation title="Vet Calculator" components={componentList} />
        </div>
        <div>  
          <Form style={{margin:'1em'}}>
              <FormGroup controlId="formSearch">
              <ControlLabel>Search</ControlLabel>
              {' '}
              <FormControl type="text" placeholder="Drug or Principle" />
              </FormGroup>
          </Form>                  
          <Button style={{margin:'1em'}} bsStyle="primary" onClick={onSearch}>Search</Button>
        </div>
      </container>

    );
  }
}

export default SearchPage;
