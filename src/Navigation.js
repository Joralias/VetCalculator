import React, { Component } from 'react';
import './App.css';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';


class Navigation extends Component {
  
  render() {
    Navigation.proptypes ={ 
      title: React.PropTypes.string,
      }
    
    const handleSelect = (selectedKey) => {
        alert('selected ' + selectedKey);

    }

  let title = this.props.title

    return (
      
      
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{title}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Component" id="basic-nav-dropdown" onSelect={handleSelect}>
              <MenuItem eventKey={1.1}>Component1</MenuItem>
              <MenuItem eventKey={1.2}>Component2</MenuItem>
              <MenuItem eventKey={1.3}>Component3</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#about">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Navigation;
