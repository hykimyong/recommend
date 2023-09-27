import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Notfound from './pages/Notfound';
import Bjscreen from './pages/Bjscreen';
import Userscreen from './pages/Userscreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bj_screen.html" element={<Bjscreen />} />
        <Route path="/user_screen.html" element={<Userscreen />} />
        {/* <Route path="/*" element={<Notfound/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
