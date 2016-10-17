import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import PanelData from '../Components/PanelData';
import {Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


class MainPage extends Component {
    state = { 
      activeIngredient: '' ,
      comertialName: '' ,
      concentration: '' ,
      dosis: '' ,
  }

    componentDidMount() {
      // aqui deberia ir el fetch a la base de datos.
      // Start listening for hash changes
      window.addEventListener('hashchange', this.onMedicineChange, false)
      // Render the initial page
      this.onMedicineChange()

 
    }
    onMedicineChange = () => {
      console.log("HELLOOOO")
      // The hash has changed so update the state
      this.setState({
        comertialName: window.location.hash.substr(1) !=='' ? window.location.hash.substr(1): 'Comertial Name',
        activeIngredient: window.location.hash.substr(1) !=='' ? window.location.hash.substr(1): 'Active Ingredient',
        concentration: 0.5,
        dosis: 0.3,

      })            
      }



  render() {
    let componentList = ['Aspirina', 'Ibuprofeno','Paracetamol']

    const onCalculate = () => {
        console.log( window.location.hash.substr(1))

  }


    return (
      <container>
        <div>
          <Navigation title="Vet Calculator" components={componentList} />
        </div>
        <div>
          <PanelData comertialName={this.state.comertialName} activeIngredient={this.state.activeIngredient} concentration={this.state.concentration} dosis={this.state.dosis} />
        </div>
        <div>  
          <Form style={{margin:'1em'}}>
              <FormGroup controlId="formWeight">
              <ControlLabel>Weight</ControlLabel>
              {' '}
              <FormControl type="text" placeholder="Weight(Kg)" />
              </FormGroup>
          </Form>                  
          <Button style={{margin:'1em'}} bsStyle="primary" onClick={onCalculate}>Calculate</Button>
        </div>
      </container>

    );
  }
}

export default MainPage;
