import '../styles/navbar.scss';

import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
              <NavLink className='navitem-link' to="/" onClick={this.toggleNavbar}>
                <NavItem className='navitem'>
                  HOME
                </NavItem>
              </NavLink>
              <NavLink className='navitem-link' to="/shop" onClick={this.toggleNavbar}>
                <NavItem className='navitem'>
                  SHOP
                </NavItem>
              </NavLink>
              <a className='navitem-link' href="https://www.instagram.com/bloomingchapinast/" onClick={this.toggleNavbar}>
                <NavItem className='navitem'>
                  INSTAGRAM
                </NavItem>
              </a>
              <a className='navitem-link' href="https://www.facebook.com/𝐁𝐥𝐨𝐨𝐦𝐢𝐧𝐠-𝑪𝒉𝒂𝒑𝒊𝒏𝒂-104446820966124/" onClick={this.toggleNavbar}>
                <NavItem className='navitem'>
                  FACEBOOK
              </NavItem>
              </a>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}