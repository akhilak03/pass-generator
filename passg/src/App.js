import {Route,Routes,Link} from 'react-router-dom';
import Home from './components/Home';
import HostEvent from './components/HostEvent';
import Login from './components/Login';
import Event from './components/Event';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Pomodoro Timer</a>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container-fluid collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav float-start ms-auto mb-2 mb-lg-0">
          <li className="nav-item p-2">
            <Link className="nav-link active" aria-current="page" to="">Home</Link>
          </li>
         
        </ul>  
      </div>
    </div>
  </nav>
     
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/HostEvent" element={<HostEvent/>}/>
       <Route path="/Event" element={<Event/>}/>
       <Route path="/Signup" element={<Signup/>}/>
      
     </Routes>
    </>
  );
}

export default App;
