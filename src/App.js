import React from 'react';
import Home from './components/Home';
import './styles/App.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path = "/" element = {<Home />}/>
      </Routes>
  );
}

export default App;