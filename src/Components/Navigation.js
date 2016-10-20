import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';


class Navigation extends Component {

  render() {

    Navigation.proptypes ={ 
      title: React.PropTypes.string,
      components : React.PropTypes.array,
      displayDropdown: React.PropTypes.boolean,
      }
    
    const handleSelect = (selectedKey) => {
        window.location.href = '#'+ selectedKey
    }

    const onAbout = () => {
        window.location.href = '#about'
    }
    const onHome = () => {
        window.location.href = ''
    }


  let title = this.props.title
  
  let displayDropdown = this.props.displayDropdown ? 'block' : 'none';

  let componentList = []

  this.props.components.forEach((element, index) => {
    componentList.push(<MenuItem key={index} eventKey={element}>{element}</MenuItem>)
  })

  
    return (
      
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>{title}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} style={{display: displayDropdown}} title='Component' id='basic-nav-dropdown' onSelect={handleSelect}>
              {componentList}
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} style={{display: displayDropdown}} onClick={onHome} href="#home">Home</NavItem>
            <NavItem eventKey={2} style={{display: displayDropdown}} onClick={onAbout} href="#about">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

Navigation.defaultProps = {
  title: 'Vet-Calculator',
  components: [],
  displayDropdown: true,

};

export default Navigation;
