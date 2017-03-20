import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/#" active>nābərlē</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">All Issues</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">My Issues</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}