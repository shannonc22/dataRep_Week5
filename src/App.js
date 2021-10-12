import './App.css';
import React, { Component } from 'react';
// imports components to app
import Header from './Components/header';
import Content from './Components/content';
import Footer from './Components/footer';
// imports bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// imports Navbar
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Create from './Components/create';
import Read from './Components/read';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        {/* code for navbar */}
         <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
      <Nav.Link href="/read">Read</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  {/* changes url to switch out different components */}
        <Switch>
          {/* Exact keyword is needed for exact path */}
          <Route path='/' component={Content} exact></Route> 
          <Route path='/create'  component={Create} exact></Route>
          <Route path='/read'  component={Read} exact></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
// mark for export
export default App;
