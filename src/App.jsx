import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import VideoCard from './components/VideoCard.jsx'

function App() {

  return (
    <main>
      <Navbar />
      <div className='pt-[60px] h-full'>
        <Sidebar />
        <div className='ml-[100px]'>
          <section id='home' className='flex justify-center items-start py-6 pr-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8'>
              {Array(50).fill(null).map((_, index) => <VideoCard key={index} />)}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
