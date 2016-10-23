import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';


class PanelData extends Component {

    render() {

        PanelData.proptypes ={ 
            comertialName: React.PropTypes.string,
            activeIngredient : React.PropTypes.string,
            concentration: React.PropTypes.float,
            units_con: React.PropTypes.string,
            dosis: React.PropTypes.float,
            units_dos: React.PropTypes.string,

        }

        const panelStyle ={
            margin: '1em'

        }


        return(
            <div style={panelStyle}>
                <Panel id="comertial"  header="Comertial Name">
                    {this.props.comertialName}
                </Panel>
                <Panel id="ingredient" header="Active Ingredient">
                    {this.props.activeIngredient}
                </Panel>
                <Panel id="concentration" header="Concentration">
                    {this.props.concentration} {this.props.units_con}
                </Panel>
                <Panel id="dosis" header="Dosis">
                    {this.props.dosis} {this.props.units_dos}
                </Panel>   
            </div>
                                   
        );
    }

}

PanelData.defaultProps = {
    comertialName: 'Comertial Name',
    activeIngredient : 'Active Ingredient',
    concentration: 0,
    dosis: 0,

};
export default PanelData;
