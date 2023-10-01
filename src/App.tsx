import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Notfound from './pages/Notfound';
import Bjscreen from './pages/Bjscreen';
import Userscreen from './pages/Userscreen';
import useExtScript from './hook/useExtScript';
import { useStore } from './store/scriptLoad';

function App() {
  const { setTrue } = useStore();

  const handleScriptCallback = () => {
    if (window.AFREECA) {
      extensionSDK = window.AFREECA.ext();
    }
    setTrue();
  };

  useExtScript('https://static.afreecatv.com/asset/app/extension-helper/afreecatv-extension-sdk.js', handleScriptCallback);

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
