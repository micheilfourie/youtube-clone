import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
    <main>
      <Navbar />
      <div className='pt-[60px] h-full'>
        <Sidebar />
        <section id='home'>

        </section>
      </div>
    </main>
  )
}

export default App
