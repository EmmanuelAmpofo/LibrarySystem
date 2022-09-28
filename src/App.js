import Login from "./pages/login/Login";
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
