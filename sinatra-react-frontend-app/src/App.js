import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import ProjectMembers from './components/ProjectMembers';
import Users from './components/Users';
function App() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path='/users' element={<Users />} />
      <Route path="/project_Members" element={<ProjectMembers />} />
    </Routes>
    </Router>
  );
};

export default App;
