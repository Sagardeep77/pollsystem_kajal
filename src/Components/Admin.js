import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuffer } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import"./style.css";

import Adminpoll from "./Adminpoll";
import Newpoll from "./Newpoll";



const Admin = () => {
    return (
        <>
        <Router>
        
        <div className="all">
        
        <Navbar bg="dark" variant="">
          <Container>
            <Navbar.Brand href="/">Dashboard </Navbar.Brand>
            <Nav>
                <Link to="/adminpoll" className="admin" > Add new user  </Link>
                <Link to="/newpoll" className="new"> Create a new poll </Link>
                
               </Nav>
          </Container>
        </Navbar>
      
      <Routes>
          <Route exact path="/adminpoll" element={<Adminpoll/>} />
          <Route exact path="/newpoll" element={<Newpoll/>} />
          </Routes>
          </div>
        </Router>
        
        </>
            
      
    )

}


export default Admin;