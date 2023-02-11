import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout'
import Mainpage from './components/Mainpage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Mainpage/>}/>
      </Route>
    </Routes>
  )
}

export default App;
