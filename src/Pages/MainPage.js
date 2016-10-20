import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import PanelData from '../Components/PanelData';
import {Alert, Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


class MainPage extends Component {
    state = { 
      activeIngredient: '' ,
      comertialName: '' ,
      concentration: '' ,
      dosis: '' ,
      resultAlert:'',
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
    let panelData =  <PanelData comertialName={this.state.comertialName} activeIngredient={this.state.activeIngredient} concentration={this.state.concentration} dosis={this.state.dosis} />

    let componentList = ['Aspirina', 'Ibuprofeno','Paracetamol']

    let resultAlert = []


    const onCalculate = () => {
        let weight = parseInt(document.getElementById("formWeight").value,10)
        let concentration = panelData.props.concentration
        let dosis = panelData.props.dosis
        
        let result = weight*dosis/concentration

        this.setState({
          resultAlert: <Alert bsStyle="info"><strong>Result: </strong>{result} ml</Alert>,
          
          })        
        console.log( 'seteo el state')
        console.log( this.state)

        console.log( weight + ' ' +concentration + ' ' + ' ' + dosis)
        console.log(result)

  }


    return (
      <container>
        <div>
          <Navigation title="Vet Calculator" components={componentList} />
        </div>
        <div>
          {panelData}
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
        <div>
          {this.state.resultAlert}
        </div>
      </container>

    );
  }
}

export default MainPage;
