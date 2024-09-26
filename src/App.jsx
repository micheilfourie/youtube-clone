import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import VideoCard from './components/VideoCard.jsx'
import React, { useState, useEffect } from 'react';

function App() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showTooltip, setShowTooltip] = useState("");

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTooltipShown = (text) => {
    setShowTooltip(text);
  };

  return (
    <main>
      <Navbar windowSize={windowSize} showTooltip={showTooltip} handleTooltipShown={handleTooltipShown} />
      <Sidebar />
      <section className='flex justify-center items-start py-6 px-8 ml-[80px] mt-[72px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8'>
          {Array(50).fill(null).map((_, index) => <VideoCard key={index} />)}
        </div>
      </section>
    </main>
  )
}

export default App
