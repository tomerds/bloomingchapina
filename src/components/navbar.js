import '../styles/navbar.scss';

import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  // need to change navlink to Router Link

  render() {
    return (
      <div className='navbar-container'>
        <Navbar color="faded" light style={{ width: '100%' }}>
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" style={{ border: 'black solid 1px', borderRadius: '0', color: 'black' }} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar >
              <NavItem className='navitem'>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <NavItem className='navitem'>
                <NavLink href="/shop">SHOP</NavLink>
              </NavItem>
              <NavItem className='navitem'>
                <NavLink href="https://www.instagram.com/bloomingchapinast/">INSTAGRAM</NavLink>
              </NavItem>
              <NavItem className='navitem'>
                <NavLink href="https://www.facebook.com/𝐁𝐥𝐨𝐨𝐦𝐢𝐧𝐠-𝑪𝒉𝒂𝒑𝒊𝒏𝒂-104446820966124/">FACEBOOK</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}