import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import PanelData from '../Components/PanelData';
import {Alert, Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Client from '../Client'


class MainPage extends Component {
    state = { 
      activeIngredient: '' ,
      comertialName: '' ,
      concentration: '' ,
      units_con: 0,
      dosis: '' ,
      units_dos: 0,
      resultAlert:'',
      calculable: 0,
  }

    componentDidMount() {
      // Start listening for hash changes
      window.onhashchange = this.onMedicineChange()
      // Render the initial page
      

 
    }
    onMedicineChange = () => {
      console.log("Change Medicine")
      // The hash has changed so update the state           

      Client.search(window.location.hash.substr(1), (results) => {
        console.log('Getting data for med')
        console.log(results)
        this.setState({
          comertialName: results[0].comertial_name,
          activeIngredient: results[0].active_ingredient,
          concentration: results[0].concentration,
          units_con: results[0].units_con,
          dosis: results[0].dosis,
          units_dos: results[0].units_dos,
          calculable: Boolean(results[0].calculable),
          posology: results[0].posology,

        })      

      })

      }



  render() {

    let componentList = ['Aspirina', 'Ibuprofeno','Paracetamol']

    let panelData =  <PanelData comertialName={this.state.comertialName} activeIngredient={this.state.activeIngredient} concentration={this.state.concentration} units_con={this.state.units_con} dosis={this.state.dosis} units_dos={this.state.units_dos} />

    const onCalculate = () => {
        let weight = parseInt(document.getElementById("formWeight").value,10)
        let concentration = panelData.props.concentration
        let dosis = panelData.props.dosis
        
        let result = weight*dosis/concentration

        this.setState({
          resultAlert: <Alert bsStyle="info"><strong>Result: </strong>{result} {this.state.posology}</Alert>,
          
          })        

  }

    let calculateButton = this.state.calculable ? (<Button style={{margin:'1em'}} bsStyle="primary" onClick={onCalculate}>Calculate</Button>) : (<Button disabled style={{margin:'1em'}} bsStyle="primary" onClick={onCalculate}>Calculate</Button>)
    console.log(calculateButton)



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
          {calculateButton}
        </div>
        <div>
          {this.state.resultAlert}
        </div>
      </container>

    );
  }
}

export default MainPage;
