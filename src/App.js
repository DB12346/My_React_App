import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Insert from './components/Insert';
import Display from './components/Display';
import DisplayById from './components/DisplayById';
import Update from './components/Update';
import Delete from './components/Delete';
import DeleteById from './components/DeleteById';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/insert">Insert</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/display">Display</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/displayById">DisplayById</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/update">Update</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/delete">Delete</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/deleteById">DeleteById</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/insert" element={<Insert />} />
          <Route path="/display" element={<Display />} />
          <Route path="/displayById" element={<DisplayById />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/deleteById" element={<DeleteById />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
