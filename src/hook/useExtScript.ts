import { useEffect } from 'react';

type ScriptCallback = () => void;

const useExtScript = (scriptUrl: string, callback: ScriptCallback): void => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;

    const handleScriptLoad: EventListener = () => {
      if (callback && typeof callback === 'function') {
        callback();
      }
    };

    script.addEventListener('load', handleScriptLoad);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleScriptLoad);
      document.body.removeChild(script);
    };
  }, [scriptUrl, callback]);
};

export default useExtScript;