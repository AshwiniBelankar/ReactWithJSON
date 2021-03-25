import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from "./components/Home";
import RestaurentCreate from "./components/RestaurentCreate";
import RestaurentDetails from "./components/RestaurentDetails";
import RestaurentSearch from "./components/RestaurentSearch";
import RestaurentUpdate from "./components/RestaurentUpdate";
import RestaurentsList from "./components/RestaurentsList";
import { Navbar,Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Restaurent</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/list">List</Link></Nav.Link>
      <Nav.Link ><Link to="/create">Create</Link></Nav.Link>
      <Nav.Link ><Link to="/search">Search</Link></Nav.Link>
      <Nav.Link ><Link to="/update">Update</Link></Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        

        <Route path="/list">
          <RestaurentsList/>
        </Route>

        <Route path="/create">
          <RestaurentCreate/>
        </Route>
        <Route path="/search">
          <RestaurentSearch/>
        </Route>
        <Route path="/details">
          <RestaurentDetails/> 
        </Route>
        <Route path="/update">
          <RestaurentUpdate/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
