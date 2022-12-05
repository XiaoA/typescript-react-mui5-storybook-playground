import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs';
import Select from './components/Select';


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  const setViewport = () => {
    setIsMobile(window.innerWidth < 650);
  };

  useEffect(() => {
    window.addEventListener('resize', setViewport);
  });

  const checkViewPort = isMobile ? <Select /> : <Tabs />;

    return (
      <div>
        {checkViewPort}
      </div>
    )
}

export default App;
