import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import VideoCard from './components/VideoCard.jsx'
import Modals from './components/Modals.jsx';
import BackgroundFilter from './components/BackgroundFilter.jsx';
import React, { useState, useEffect } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  const handleModalDisplay = (type) => {
    type ? (setModalOpen(true), setModalType(type)) : (setModalOpen(false), setModalType(""));
  }

  const handleModalClose = () => {
    setModalOpen(false);
    setModalType("");
  }

  return (
    <main>

      {modalOpen ? (
        <div>
          <BackgroundFilter handleModalClose={handleModalClose} />
          <Modals modalType={modalType} handleModalClose={handleModalClose} />
        </div>
      ) : null}

      <Navbar windowSize={windowSize} handleModalDisplay={handleModalDisplay} />
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
