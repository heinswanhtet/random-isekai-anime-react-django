import './App.css'
import IsekaiRandom from './components/IsekaiRandom'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'

function App() {

  return (
    <div className='container'>
      <Navbar />
      <IsekaiRandom />
      <SocialLinks />
    </div>
  )
}

export default App
