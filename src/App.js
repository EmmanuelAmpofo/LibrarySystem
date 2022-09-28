import Login from "./pages/login/Login";
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from "./pages/signup/SignUp";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
