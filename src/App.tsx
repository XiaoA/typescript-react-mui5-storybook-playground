import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs';
import Select from './components/Select';

// Updated implementation, using 'window.matchMedia()' events
// Sources:
//  - https://gomakethings.com/a-better-way-to-test-breakpoints-with-vanilla-javascript/
//  - https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
//  - https://medium.com/swlh/using-window-matchmedia-for-media-queries-in-reactjs-97ddc66fca2e


const App = () => {
  const [isDesktop, setIsDesktop] = useState<{ matches: boolean }>({
    matches: window.innerWidth > 650 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 650px)");
    mediaQuery.addListener(setIsDesktop);

    return () => mediaQuery.removeListener(setIsDesktop);
  }, []);

  const displayOptions = isDesktop.matches ? <Tabs /> : <Select />;

  return (
    <>
      {displayOptions}
    </>
  );
};

export default App;

// Original implementation, based on using an addEventListener to look for viewport resize events
// https://github.com/XiaoA/responsive-tab-select-proof-of-concept/commit/0ebcf36c13ef8a2826106f3f953a595056aadc16

// const App = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

//   const setViewport = () => {
//     setIsMobile(window.innerWidth < 650);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', setViewport);
//   });

//   const checkViewPort = isMobile ? <Select /> : <Tabs />;

//     return (
//       <div>
//         {checkViewPort}
//       </div>
//     )
// }

// export default App;
