import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import"./admin.css";
import Adminpoll from "./Adminpoll";
import Newpoll from "./Newpoll";



const Admin = () => {
    return (
        <>
        <Router>
        
        <div className="wrapper">
         
        
        <Navbar bg="dark" variant="">
          <Container>
            <Navbar.Brand href="/">Dashboard </Navbar.Brand>
            <Nav>
                <Link to="/adminpoll" className="admin" > Add new user  </Link>
                <Link to="/newpoll" className="new"> Create a new poll </Link>
                
               </Nav>
          </Container>
        </Navbar>
        {/* <div className="header">
        POLL-WORLD
      </div>
       */}
       {/* using router */}
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