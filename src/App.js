import './App.css';
import Login from "./Containers/login/Login";
import Admin from "./Components/Admin";
import Adminpoll from "./Components/Adminpoll";
import Newpoll from "./Components/Newpoll";
import Options from "./Components/Options";
import Register from './Containers/Register';
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
      {/* <Login/> */}
      <Register/>
    </div>
  );
}

export default App;
