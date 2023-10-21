import { useState } from 'react'

// importing bootstrap
import { Button, Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"


// import components
import MyNavBar from './pages/NavBar'
import HomepageBanner from './pages/HomescreenBanner'
import AboutMe from './pages/AboutMe'
import Exp from './pages/Experiences'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Footer from './pages/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyNavBar></MyNavBar>

      <br></br>

      <HomepageBanner className="banner"></HomepageBanner>
      <AboutMe> </AboutMe>
      <Exp></Exp>
      {/* <Projects></Projects> */}

      {/* <Contacts></Contacts> */}
      <br></br>
      <Footer></Footer> 
    </div>
  )
}

export default App
