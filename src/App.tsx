import React, { useCallback, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Notfound from './pages/Notfound';
import Bjscreen from './pages/Bjscreen';
import Userscreen from './pages/Userscreen';
import { useStore } from './store/scriptLoad';

function App() {
  const { setTrue } = useStore();

  const handleScriptCallback = useCallback(() => {
    if (window.AFREECA) {
      extensionSDK = window.AFREECA.ext();
    }
    setTrue();
  },[setTrue]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.afreecatv.com/asset/app/extension-helper/afreecatv-extension-sdk.js';
    script.async = true;

    script.addEventListener('load', handleScriptCallback);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleScriptCallback);
      document.body.removeChild(script);
    };
  }, [handleScriptCallback]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bj_screen.html" element={<Bjscreen />} />
        <Route path="/bj_screen" element={<Bjscreen />} />
        <Route path="/user_screen.html" element={<Userscreen />} />
        <Route path="/user_screen" element={<Userscreen />} />
        <Route path="/*" element={<Bjscreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
