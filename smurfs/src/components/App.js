import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../logo.jpg'

export default class App extends React.Component {
  state = {
    collapsed: true,
  }
  toggleNavbar = event => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar color="warning" light>
          <img className="navimage" src={logo} />
          <NavbarBrand href="/" className="mr-auto">SMURFS VILLAGE</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav  navbar>
            <Link to="/">Home</Link>
            <Link to="/smurfs">Smurfs Village</Link>
            </Nav>
          </Collapse>
        </Navbar>
        <Route path="/smurfs" component={Smurfs} />
      </div>
    );
  }
}

