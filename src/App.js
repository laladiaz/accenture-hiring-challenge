import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout'
import PostBody from './components/PostBody';
import Mainpage from './components/Views/Mainpage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='one-post' element={<PostBody/>}/>
      </Route>
    </Routes>
  )
}

export default App;
