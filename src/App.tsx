import React, { useCallback, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Notfound from './pages/Notfound';
import Bjscreen from './pages/Bjscreen';
import Userscreen from './pages/Userscreen';
import MoUserScreen from './pages/MoUserScreen';

import { useStore } from './store/scriptLoad';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const { setTrue } = useStore();
  const basePath = window.location.pathname.replace(/\/[^/]*$/, '');

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={`${basePath}/bj_screen.html`} element={<Bjscreen />} />
          <Route path={`${basePath}/bj_screen`} element={<Bjscreen />} />
          <Route path={`${basePath}/user_screen.html`} element={<Userscreen />} />
          <Route path={`${basePath}/user_screen`} element={<Userscreen />} />
          <Route path={`${basePath}/mo_user_screen.html`} element={<MoUserScreen />} />
          <Route path={`${basePath}/mo_user_screen`} element={<MoUserScreen />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
