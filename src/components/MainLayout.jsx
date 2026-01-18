import BackgroundImage from '../assets/backround.png'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <div className='w-full bg-center bg-cover relative'
    style={{backgroundImage: `linear-gradient(rgba(0,9,0,0.5),rgba(0,9,0,0.9)),url(${BackgroundImage})`}}
    >
     <header>
       <Navbar />
      </header>
        <main className=''>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Home