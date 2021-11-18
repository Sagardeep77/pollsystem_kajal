import './App.css';
import Login from "./Containers/login/Login";
import Admin from "./Components/Admin";
import Adminpoll from "./Components/Adminpoll";
import Newpoll from "./Components/Newpoll";
import Options from "./Components/Options";
import Register from './Containers/Register';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
      {/* <Admin /> */}
      {/* <div className="header">
        POLL-WORLD
      </div> */}
      {/* <Newpoll /> */}
      {/* <Options/> */}
      {/* <Adminpoll/> */}
      <BrowserRouter>
      <Routes>
      {/* <Route exact path="/" element={<Login/>}/> */}
            {/* {/* <Login /> */}
          {/* </Route> */} 
      <Route exact path="/Admin" element={<Admin/>} />

       {/* <Admin/>
               </Route>  */}
       {/* <Route exact path="/Adminpoll" element={<Adminpoll/>} /> */}
       <Route exact path="/Adminpoll" element={<Adminpoll/>} />
       <Route exact path="/Newpoll" element={<Newpoll/>} />
       <Route exact path="/Login" element={<Login/>} />
      </Routes>
      <Register/>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
