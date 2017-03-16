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
// import React from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// class Navigation extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="faded" light toggleable>
//           <NavbarToggler right onClick={this.toggle} />
//           <NavbarBrand href="/">nābərlē</NavbarBrand>
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/issues/">All Issues</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="http://sfgov.org/">SfGov.org</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default Navigation