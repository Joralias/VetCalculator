import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import {Button, Form, FormGroup, ControlLabel, FormControl, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Client from '../Client'

class SearchPage extends Component {
    state = { 
      searchResultsItems:[]
  }
    
  render() {

    const MATCHING_ITEM_LIMIT = 25;

    let componentList = ['Aspirina', 'Ibuprofeno','Paracetamol']
    let resultsItems = []
    
    const onSearch = (e) =>  {
      e.preventDefault()
      let value = document.getElementById('formSearch').value      
      Client.search(value, (results) => {
        console.log('Search executed')
        console.log(results)

        results.slice(0, MATCHING_ITEM_LIMIT).forEach((element, index) => {
          let linkToMedicinePage = "#" + element.comertial_name
          resultsItems.push(<ListGroupItem href={linkToMedicinePage} key={index}>{element.comertial_name}</ListGroupItem>)
         })

        this.setState({searchResultsItems:resultsItems})
      
        console.log(this.state.searchResultsItems)

      });
    }


    const handleKeyPress=(e)=> {
      if (e.key === 'Enter') {
        e.preventDefault()
        onSearch(e);
      }
    }

    return (
      <container>
        <div>
          <Navigation title="Vet Calculator" components={componentList} />
        </div>
        <div style={{margin:'1em'}}>  
          <Form >
              <FormGroup controlId="formSearch">
              <ControlLabel>Search</ControlLabel>
              <FormControl onKeyPress={handleKeyPress} type="text" placeholder="Drug or Principle" />
              </FormGroup>
          </Form>                  
          <Button  bsStyle="primary" onClick={onSearch}>Search</Button>
         </div>
         <ListGroup style={{margin:'1em'}}>
            {this.state.searchResultsItems}
         </ListGroup>       
      </container>

    );
  }
}

export default SearchPage;

