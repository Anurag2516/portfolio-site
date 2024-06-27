import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Serve} from "./components/Serve";
import './index.css'; 


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Serve/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
