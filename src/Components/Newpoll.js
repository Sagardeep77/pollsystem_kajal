import React from "react";
import { Container,Row} from "react-bootstrap";
import './style2.css';

const Newpoll = () =>{
    return(
        <Container className="con">
            <Row>
<div className="new1">
  
        <form className="new">
        <div className="cc">
         <label clasName="lb"> Question no 1.</label>
        <input type="text"  placeholder="     add a new question" className="lb"/>
        <button id="bd">Add</button> 
           
        <br/><br/>
        
     
        <label > Question no 2. </label>
        <input type="text"  placeholder="     add a new question" className="lb"/>
        <button id="bd">Add</button> 
       
        <br/><br/>
          
      
        <label > Question no 3. </label>
        <input type="text"  placeholder="   add a new question" className="lb"/>
        <button id="bd">Add</button> 
        
        <br/><br/>
           
        
        <label >Question no 4.</label>
        <input type ="text" placeholder="    add a new question" className="lb"/>
        <button id="bd">Add</button> 
       
        <br/><br/>
          
        </div>
    </form>
</div>
</Row>
</Container>


    );
}
export default Newpoll;