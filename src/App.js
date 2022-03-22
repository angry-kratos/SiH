import First from "./First"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Login"
import About from './About'
import Contact from "./Contact";
import Statistics from "./Statistics";
import Profile from "./Profile";
// import SignUp from "./Signup";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<First />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        {/* <Route path='/SignUp' element={<SignUp />} /> */}
        <Route path='/Statistics' element={<Statistics />} />
        <Route path='/Profile' element={<Profile />} />





      </Routes>


    </Router>


  );
}

export default App;
