import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Projects from './components/Projects';
import NavBar from './components/NavBar';

import Users from './components/Users';
import AddProjectForm from './components/AddProjectForm';
function App() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path='/users' element={<Users />} />
      
      <Route path="/AddProjectForm" element={<AddProjectForm />} />
      
    </Routes>
    </Router>
  );
};

export default App;
